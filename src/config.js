module.exports = ({ env, isDevEnv }) => {
  const config = {
    web: {
      port: process.env.NODE_PORT,
      gaId: process.env.NEXT_PUBLIC_GA_ID,
    },
    db: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      debug: process.env.KNEX_DEGUB === 'true',
    },
    env,
    isDevEnv,
  }

  return config
}
