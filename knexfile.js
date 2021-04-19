require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT,
    },
    useNullAsDefault: true,
    debug: false,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT,
    },
    useNullAsDefault: true,
    debug: false,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
}
