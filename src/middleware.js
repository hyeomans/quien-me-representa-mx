const helmet = require('helmet')
const compression = require('compression')
const express = require('express')

module.exports = (expressApp) => {
  expressApp.use(
    helmet({ contentSecurityPolicy: false }),
    compression(),
    express.json(),
    express.urlencoded({ extended: true }),
  )
}
