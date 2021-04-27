const express = require('express')
const next = require('next')
const knex = require('knex')
const knexPostgis = require('knex-postgis')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const pino = require('pino')

const graphqlServer = require('./graphql')
const logger = pino()

// Make sure to set this on package.json script because
// Next only loads env variables after calling `prepare()`
const nodeEnv = process.env.NODE_ENV
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  //Next prepare loads environment variables
  const config = {
    web: {
      port: process.env.NODE_PORT,
    },
    db: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      debug: process.env.KNEX_DEGUB === 'true',
    },
  }

  const db = knex({
    client: 'pg',
    connection: {
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      port: config.db.port,
      database: config.db.database,
    },
    useNullAsDefault: true,
    debug: config.db.debug,
  })
  const st = knexPostgis(db)

  const expressServer = express()
  if (nodeEnv === 'production') {
    expressServer.set('trust proxy', 1) // trust first proxy
  }

  expressServer.use(
    helmet({ contentSecurityPolicy: false }),
    compression(),
    cors({
      origin: [`http://localhost:${config.web.port}`],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  )

  graphqlServer({ expressServer, db, st })

  expressServer.all('*', (req, res) => {
    return handle(req, res)
  })

  expressServer.listen(config.web.port, (err) => {
    if (err) throw err
    logger.info(`> Graphql endpoint ready on: http://localhost:${config.web.port}/graphql`)
    logger.info(`> Ready on http://localhost:${config.web.port}`)
  })
})
