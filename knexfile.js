// Update with your config settings.
const config = require('./config')

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: config.database.server,
      database: config.database.name,
      user: config.database.username,
      password: config.database.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: config.database.server,
      database: config.database.name,
      user: config.database.username,
      password: config.database.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: config.database.server,
      database: config.database.name,
      user: config.database.username,
      password: config.database.password
    },
    pool: {
      min: 2,
      max: 30
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
