import * as config from '../dist/config';

const OPTIONS = {
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
  test: {
    ...OPTIONS,
    port: config.dbPort || 5433
  },
  development: OPTIONS,
  production: OPTIONS
};
