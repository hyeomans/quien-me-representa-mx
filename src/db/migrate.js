require('dotenv').config()
const { setupSlonikMigrator } = require('@slonik/migrator')
const { createPool } = require('slonik')

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`

const slonik = createPool(connectionString)

const migrator = setupSlonikMigrator({
  migrationsPath: __dirname + '/migrations',
  slonik,
  mainModule: module,
})

module.exports = { slonik, migrator }
