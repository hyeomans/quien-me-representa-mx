const pino = require('pino')

const options = {}

if (process.env.NODE_ENV.toLowerCase() !== 'production') {
  options.prettyPrint = { levelFirst: true }
}

const logger = pino(options)

module.exports = logger
