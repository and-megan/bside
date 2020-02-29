const config = require('../dist/config');

const DEFAULT_OPTIONS = {
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  host: config.dbHost,
  port: 5432,
  dialect: 'postgres',
  define: {
    underscored: true
  }
};


module.exports = {
  development: {
    ...DEFAULT_OPTIONS,
    port: config.dbPort || 15432
  },
  test: {
    ...DEFAULT_OPTIONS,
    port: config.dbPort || 25432
  },

  production: DEFAULT_OPTIONS
};
