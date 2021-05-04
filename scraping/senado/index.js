const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
const entidades = require('../entidades')
const Promise = require('bluebird')

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

const baseUrlPorEntidadFederativa = `${baseUrl}/64/senadores/por_entidad_federativa`

const r = entidades.map((e) => {
  const urlEntidad = `${baseUrlPorEntidadFederativa}/${e.nombre.toLowerCase().replace(/\s/g, '_')}`
  return instance.get(urlEntidad).then((r) => parse(e, r.data))
})

function parse(entidad, html) {
  const $ = cheerio.load(html)
  const senadoresDiv = $('.panel-body')
  const result = []

  senadoresDiv.each(function () {
    const imgUrl = $(this).find('div > a > img').attr('src')
    const nombre = $(this)
      .find('h3 > strong > a')
      .text()
      .replace(/^Sen. /, '')
    const urlPath = $(this).find('h3 > strong > a').attr('href')
    const desc = $(this).find('div > p').text().trim()
    const link = `${baseUrl}${urlPath}`

    const sql = `insert into actores_politicos (nombre, puesto, img_url, created_at) values ('${nombre}', 'Senado ${entidad.nombre} por ${desc}', '${baseUrl}${imgUrl}', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;
insert into senadurias(actor_politico_id, periodo, estado, link) select id, '[2018-11-01, 2024-9-1)'::daterange, ${entidad.numero}, '${link}' from actores_politicos where nombre_formatted = lower(unaccent('${nombre}'));
    `
    result.push(sql.trim())
  })

  return result.join('\n')
}

Promise.all(r).then((result) => {
  return writeFile(`${process.cwd()}/scraping/senado/sql.txt`, result.join('\n'))
})
