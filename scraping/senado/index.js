const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
const entidades = require('./entidades')
const baseUrl = 'https://www.senado.gob.mx'
const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

const instance = axios.create({
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

const actoresPoliticosSql = []
const senadoresSql = []

function parseAndSave(entidad) {
  return async (html) => {
    const { numeroEntidad, nombreEntidad } = entidad
    const $ = cheerio.load(html)
    const senadoresDiv = $('.panel-body')
    const result = []
    senadoresDiv.each(function () {
      const imgUrl = $(this).find('div > a > img').attr('src')
      const nombre = $(this)
        .find('h3 > strong > a')
        .text()
        .replace(/^Sen. /, '')
      const url = $(this).find('h3 > strong > a').attr('href')
      const desc = $(this).find('div > p').text().trim()
      const actorPoliticoSql = `insert into actores_politicos (nombre, puesto, img_url, created_at) values ('${nombre}', 'Senado ${nombreEntidad} por ${desc}', '${baseUrl}${imgUrl}', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;`
      const senadoSql = `insert into senadurias(actor_politico_id, periodo, estado) select id, '[2018-11-01, 2024-9-1)'::daterange, ${numeroEntidad} from actores_politicos where nombre_formatted = lower(unaccent('${nombre}'));`

      actoresPoliticosSql.push(actorPoliticoSql)
      senadoresSql.push(senadoSql)

      result.push({
        nombre,
        url: `${baseUrl}${url}`,
        numeroEntidad: 1,
        entidad: nombre,
        imgUrl: `${baseUrl}${imgUrl}`,
        desc: `Senado ${nombreEntidad} por ${desc}`,
        actorPoliticoSql,
        senadoSql,
      })
    })
    await writeFile(
      `${process.cwd()}/scraping/senado/senadores.${nombreEntidad.toLowerCase()}.json`,
      JSON.stringify(result, null, 2),
    )
  }
}

// Promise.all()
const all = entidades.map(async (entidad) => {
  console.log('mandando request a ', entidad.url)
  const { data } = await instance({ method: 'get', url: entidad.url })
  console.log('html recibido. Parseando...')
  return parseAndSave(entidad)(data)
})

Promise.all(all).then(() => {
  return writeFile(
    `${process.cwd()}/scraping/senado/senadores.txt`,
    `${actoresPoliticosSql.join('\n')}\n${senadoresSql.join('\n')}`,
  )
})
