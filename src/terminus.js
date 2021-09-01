const { createTerminus } = require('@godaddy/terminus')
const Promise = require('bluebird')
const logger = require('./logger')

module.exports = ({ db }) => {
  //Terminus functions
  function onSignal() {
    logger.info('server is starting cleanup')
    return Promise.all([
      // your clean logic, like closing database connections
      db.destroy(),
    ])
  }

  function onShutdown() {
    logger.info('cleanup finished, server is shutting down')
  }

  async function healthCheck(state) {
    if (state.isShuttingDown) {
      return Promise.resolve()
    }
    try {
      await db.raw('SELECT 1')
      return { db: 'ok' }
    } catch (e) {
      logger.error(e, 'error on healthcheck')
      throw new Error('error on healthcheck')
    }
  }

  const options = {
    // health check options
    healthChecks: {
      '/healthcheck': healthCheck, // a function accepting a state and returning a promise indicating service health,
      verbatim: true, // [optional = false] use object returned from /healthcheck verbatim in response,
      __unsafeExposeStackTraces: true, // [optional = false] return stack traces in error response if healthchecks throw errors
    },

    // cleanup options
    timeout: 1000, // [optional = 1000] number of milliseconds before forceful exiting
    signals: ['SIGTERM', 'SIGINT', 'SIGHUP'],
    // sendFailuresDuringShutdown, // [optional = true] whether or not to send failure (503) during shutdown
    // beforeShutdown, // [optional] called before the HTTP server starts its shutdown
    onSignal, // [optional] cleanup function, returning a promise (used to be onSigterm)
    onShutdown, // [optional] called right before exiting
    // onSendFailureDuringShutdown, // [optional] called before sending each 503 during shutdowns

    // both
    // logger, // [optional] logger function to be called with errors. Example logger call: ('error happened during shutdown', error). See terminus.js for more details.
  }

  return (server) => {
    createTerminus(server, options)
  }
}
