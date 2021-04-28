const axios = require('axios')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const promisify = require('util').promisify
const writeFile = promisify(fs.writeFile)
const entidades = require('./entidades')

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

const sqlFile = `${process.cwd()}/scraping/gobernadores/sql.txt`

const promises = entidades.map((entidad) => {
  return instance({ method: 'get', url: entidad.url })
    .then(({ data }) => cheerio.load(data))
    .then(($) => {
      const nombre = $(
        '#fContenido > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.col-xs-12.col-md-8.texto.rcGobernadoresEF > h4 > a',
      )
        .text()
        .trim()

      const periodo = $(
        '#fContenido > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.col-xs-12.col-md-8.texto.rcGobernadoresEF',
      )
        .text()
        .trim()
        .split('\n')
        .map((x) => x.trim())
        .filter((x) => x !== '')[1]
        .replace(/\//gi, '-')
        .split(' a ')

      const [dI, mI, aI] = periodo[0].split('-')
      const [dF, mF, aF] = periodo[1].split('-')

      const imgUrl = $(
        '#fContenido > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.col-xs-12.col-md-4.pb15 > a > img',
      ).attr('src')

      return `
      insert into actores_politicos (nombre, puesto, img_url, created_at)
        values ('${nombre}', 'Gobierno ${entidad.nombreEntidad} en período ${periodo}', '${imgUrl}', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

      insert into gobernacion(actor_politico_id, periodo, estado)
      select id, '[${mI}-${dI}-${aI}, ${mF}-${dF}-${aF}]'::daterange, ${entidad.numeroEntidad}
      from actores_politicos where nombre_formatted = lower(unaccent('${nombre}'));
      `
    })
})

Promise.all(promises).then((r) => {
  return writeFile(sqlFile, r.join('\n'))
})
