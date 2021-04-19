const express = require('express')
const next = require('next')
const graphqlServer = require('./graphql')
const knex = require('knex')
const knexPostgis = require('knex-postgis')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const expressServer = express()
  const db = knex({
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
    },
    useNullAsDefault: true,
    debug: process.env.KNEX_DEGUB === 'true',
  })
  const st = knexPostgis(db)

  expressServer.get('/a', (req, res) => {
    return nextApp.render(req, res, '/a', req.query)
  })

  expressServer.get('/b', (req, res) => {
    return nextApp.render(req, res, '/b', req.query)
  })

  graphqlServer({ expressServer, db, st })

  expressServer.all('*', (req, res) => {
    return handle(req, res)
  })

  expressServer.listen(port, (err) => {
    if (err) throw err
    console.log(`> Graphql endpoint ready on: http://localhost:${port}/graphql`)
    console.log(`> Ready on http://localhost:${port}`)
  })
})
