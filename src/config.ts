export const env = process.env.NODE_ENV || process.env.NODE_ENV || 'development';

export namespace Env {
  export const isDev = (env === 'development');
  export const isTest = env === 'test';
  export const isProd = env === 'production';
}

if (Env.isDev || Env.isTest) {
  const dotenv = require('dotenv');
  dotenv.config();
}

export const dbHost = process.env.POSTGRES_HOST;
export const dbPort = process.env.POSTGRES_PORT;
export const dbUser = process.env.POSTGRES_USER;
export const dbPassword = process.env.POSTGRES_PASS;
export const dbName = process.env.POSTGRES_DB;
