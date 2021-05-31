const knex = require('knex')
const knexPostgis = require('knex-postgis')

module.exports = ({ config }) => {
  const db = knex({
    client: 'pg',
    connection: {
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      port: config.db.port,
      database: config.db.database,
    },
    pool: {
      min: 0,
      max: 5,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 600000,
    },
    useNullAsDefault: true,
    debug: config.db.debug,
  })
  const st = knexPostgis(db)

  return { db, st }
}
