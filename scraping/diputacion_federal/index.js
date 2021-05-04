const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
// const readFile = promisify(fs.readFile)
const entidades = require('./entidades')
const { promises: Fs } = require('fs')
const Promise = require('bluebird')

async function exists(path) {
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}

const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

const instance = axios.create({
  responseType: 'arraybuffer',
  responseEncoding: 'binary',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  headers: {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'User-Agent': userAgent,
    Connection: 'Keep-Alive',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,*',
  },
})

const baseUrl = 'http://sitl.diputados.gob.mx/LXIV_leg'

function colectLinksByEntidad() {
  const linksDeDiputadosPorEntidad = { lastRun: new Date() }
  const promises = entidades.map((e) => {
    const listadoPorEntidadUrl = `${baseUrl}/listado_diputados_gpnp.php?tipot=Edo&edot=${e.numeroEntidad}`

    return instance
      .get(listadoPorEntidadUrl)
      .then((r) => cheerio.load(r.data.toString('latin1')))
      .then(($) => {
        console.log(
          'Obteniendo links de diputados para la entidad de',
          e.nombreEntidad,
          listadoPorEntidadUrl,
        )
        const links = []
        $(`a[href]`).each(function () {
          const href = $(this).attr('href')
          if (href.startsWith('curricula.php')) {
            links.push(`${baseUrl}/${href}`)
          }
        })
        linksDeDiputadosPorEntidad[e.numeroEntidad] = { nombreEntidad: e.nombreEntidad, links }
      })
  })

  return Promise.all(promises).then(() => {
    return writeFile(
      `${process.cwd()}/scraping/diputacion_federal/links_diputados_por_entidad.json`,
      JSON.stringify(linksDeDiputadosPorEntidad, null, 2),
    ).then(() => linksDeDiputadosPorEntidad)
  })
}

function main() {
  let i = 31
  let f = 32
  return exists(`${process.cwd()}/scraping/diputacion_federal/links_diputados_por_entidad.json`)
    .then((fileExists) => {
      if (!fileExists) {
        return colectLinksByEntidad()
      }
      console.log('leí archivo del disco')
      return Fs.readFile(
        `${process.cwd()}/scraping/diputacion_federal/links_diputados_por_entidad.json`,
      ).then(JSON.parse)
    })
    .then((r) => {
      const allPromises = []

      //TODO: I can't run all states
      for (let index = i; index <= f; index++) {
        const element = r[index]
        const links = element.links
        allPromises.push(
          allLinksPerEntidad({ links, numeroEntidad: index, nombreEntidad: element.nombreEntidad }),
        )
      }

      console.log('waiting for all promises')
      return Promise.all(allPromises)
    })
    .then((all) => {
      return writeFile(
        `${process.cwd()}/scraping/diputacion_federal/${i}-${f}.sql.txt`,
        all.join('\n'),
      )
    })
}

main()
  .then(() => console.log('done'))
  .catch(console.error)

function allLinksPerEntidad({ numeroEntidad, nombreEntidad, links }) {
  const linksLen = links.length
  const allPromises = links.map((link) => {
    return Promise.delay(1000).then(() =>
      retrieveDiputadoData({ link, numeroEntidad, nombreEntidad }),
    )
  })

  return Promise.all(allPromises).then((allP) => {
    const clean = allP
      .filter((r) => r !== '')
      .map((r) => r.trim())
      .map((r) => r.trimStart())

    return `------ Resultados para ${nombreEntidad}
------ Total de diputados ${linksLen}
------ Total de SQL queries ${clean.length}
${clean.join('\n')}`
  })
}

function retrieveDiputadoData({ link, numeroEntidad, nombreEntidad }) {
  return instance
    .get(link)
    .then((r) => {
      return cheerio.load(r.data.toString('latin1'))
    })
    .then(($) => {
      const nombre = $(
        'body > div > table.cajasombra > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td > center > strong',
      )
        .text()
        .replace('Dip. ', '')
        .trim()
      const entidad = $(
        'body > div > table.cajasombra > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)',
      )
        .text()
        .trim()
        .replace(/\n/g, '')
        .split(':')
      const imgUrl = $(
        'body > div > table.cajasombra > tbody > tr > td > table > tbody > tr > td:nth-child(1) > img',
      )
        .attr('src')
        .replace('.', '') //replace first dot

      const replacedLink = link.replace('?', '\\\\?')
      //TODO: Improve this, might break in the future
      //TODO: No estoy agarrando diputados plurinominales
      if (entidad[0].toLowerCase().endsWith('distrito')) {
        const distrito = entidad[1].split('|')[0].trim()
        return `insert into actores_politicos (nombre, puesto, img_url, created_at) values ('${nombre}', 'Diputación Federal mayoría relativa ${nombreEntidad} por distrito ${distrito}', '${baseUrl}${imgUrl}', '2021-04-29 13:00:00') ON CONFLICT DO NOTHING;
insert into diputacion_federal(actor_politico_id, periodo, distrito_federal, numero_entidad, link) select id, '[2018-11-01,2021-09-01)'::daterange, ${distrito}, ${numeroEntidad}, '${replacedLink}' from actores_politicos where nombre_formatted = lower(unaccent('${nombre}'));`
      }

      return ''
    })
}
