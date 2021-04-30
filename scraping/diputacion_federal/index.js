const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
// const readFile = promisify(fs.readFile)
const entidades = require('./entidades')
const { promises: Fs } = require('fs')

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

      for (let index = 1; index <= 32; index++) {
        const element = r[index]
        const links = element.links
        for (const link of links) {
          allPromises.push(
            retrieveDiputadoData({
              link,
              numeroEntidad: index,
              nombreEntidad: element.nombreEntidad,
            }),
          )
        }
      }
      return Promise.all(allPromises)
    })
    .then((all) => {
      return writeFile(`${process.cwd()}/scraping/diputacion_federal/sql.txt`, all.join('\n'))
    })
}

main().then(() => console.log('done'))

function retrieveDiputadoData({ link, numeroEntidad, nombreEntidad }) {
  console.log('cargando link', link)
  return instance
    .get(link)
    .then((r) => cheerio.load(r.data.toString('latin1')))
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

      //TODO: Improve this, might break in the future
      //TODO: No estoy agarrando diputados plurinominales
      if (entidad[0].toLowerCase().endsWith('distrito')) {
        const distrito = entidad[1].split('|')[0].trim()
        return `
        insert into actores_politicos (nombre, puesto, img_url, created_at) values (${nombre}, 'Diputación Federal mayoría relativa ${nombreEntidad} por distrito ${numeroEntidad}', ${imgUrl}, '2021-04-29 13:00:00') ON CONFLICT DO NOTHING;
        insert into diputacion_federal(actor_politico_id, periodo, distrito_federal, numero_entidad) select id, '[2018-11-01,2021-09-01)'::daterange, ${distrito}, ${numeroEntidad} from actores_politicos where nombre_formatted = lower(unaccent('${nombre}'));
        `
      }

      return ''
    })
}
