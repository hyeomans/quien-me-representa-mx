const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

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

const baseUrl = 'http://www.congresoson.gob.mx'
// const directorioUrl = `${baseUrl}/Legislatura/Diputados`
// instance.get(directorioUrl).then((r) => {
//   return writeFile(
//     `${process.cwd()}/scraping/congreso_local/sonora/directorio.html`,
//     r.data.toString('latin1'),
//   )
// })

readFile(`${process.cwd()}/scraping/congreso_local/sonora/directorio.html`)
  .then(cheerio.load)
  .then(($) => {
    const diputados = []
    $('tr').each(function () {
      const nombre = $(this).find('a:nth-child(1)').html()
      if (!nombre) {
        return
      }
      const link = $(this).find('a:nth-child(1)').attr('href').replace('?', '\\\\?')
      const cabecera = $(this).find('td:nth-child(1)').html()

      if (
        cabecera === 'Diputado de Representación Proporcional' ||
        cabecera === 'Diputada de Representación Proporcional'
      ) {
        //TODO: Diputados plurinominales
        return
      }
      const distritoLocal = cabecera.split('.')[0]
      const imgUrl = $(this).find('.al').attr('src')

      diputados.push({
        nombre,
        distritoLocal,
        imgUrl: `${baseUrl}${imgUrl}`,
        link: `${baseUrl}${link}`,
      })
    })
    return diputados
  })
  .then((diputados) => {
    return diputados
      .map((d) => {
        return `insert into actores_politicos (nombre, puesto, img_url, created_at) values ('${d.nombre}', 'Diputación Local Sonora por Distrito ${d.distritoLocal}', '${d.imgUrl}', '2021-05-02 13:00:00') ON CONFLICT DO NOTHING;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-12-01,2021-12-02)'::daterange, ${d.distritoLocal}, 26, '${d.link}' from actores_politicos where nombre_formatted = lower(unaccent('${d.nombre}'));`
      })
      .join('\n')
  })
  .then((sql) => {
    return writeFile(`${process.cwd()}/scraping/congreso_local/sonora/sql.txt`, sql)
  })
