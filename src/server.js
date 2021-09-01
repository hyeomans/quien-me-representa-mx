require('dotenv').config()
const http = require('http')
const express = require('express')
const next = require('next')

const initTerminus = require('./terminus')
const packageJson = require('../package.json')
const graphqlServer = require('./graphql')
const logger = require('./logger')
const loadConfig = require('./config')
const initDb = require('./db')
const middleware = require('./middleware')

const nodeEnv = process.env.NODE_ENV
const dev = process.env.NODE_ENV !== 'production'

const config = loadConfig({ env: nodeEnv, isDevEnv: dev })
const { db, st } = initDb({ config })
const terminus = initTerminus({ db })
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const expressServer = express()

if (nodeEnv === 'production') {
  require('newrelic')
  expressServer.set('trust proxy', 1) // trust first proxy
}

middleware(expressServer)

graphqlServer({ expressServer, db, st, logger })

const httpServer = http.createServer(expressServer)
terminus(httpServer)

nextApp.prepare().then(() => {
  expressServer.all('*', (req, res) => {
    return handle(req, res)
  })

  httpServer.listen(config.web.port, (err) => {
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
