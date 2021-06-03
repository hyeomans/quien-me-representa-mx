const express = require('express')
const next = require('next')
const compression = require('compression')
const helmet = require('helmet')

const packageJson = require('../package.json')
const graphqlServer = require('./graphql')
const logger = require('./logger')
const loadConfig = require('./config')
const initDb = require('./db')

// Make sure to set this on package.json script because
// Next only loads env variables after calling `prepare()`
const nodeEnv = process.env.NODE_ENV
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  if (!dev) {
    require('newrelic')
  }
  //Next prepare loads environment variables
  const config = loadConfig({ env: nodeEnv, isDevEnv: dev })
  const { db, st } = initDb({ config })

  const expressServer = express()
  if (nodeEnv === 'production') {
    expressServer.set('trust proxy', 1) // trust first proxy
  }

  expressServer.use(helmet({ contentSecurityPolicy: false }), compression())

  graphqlServer({ expressServer, db, st, logger })

  expressServer.all('*', (req, res) => {
    return handle(req, res)
  })

  expressServer.listen(config.web.port, (err) => {
    if (err) throw err
    logger.info({
      msg: 'Environment variables',
      dbHost: config.db.host,
      webPort: config.web.port,
      nodeEnv: config.env,
      gaId: config.web.gaId,
    })
    logger.info(`> Graphql endpoint ready on: http://localhost:${config.web.port}/graphql`)
    logger.info(`> Version ${packageJson.version} ready on http://localhost:${config.web.port}`)
  })
})
