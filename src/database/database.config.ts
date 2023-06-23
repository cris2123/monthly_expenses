// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  development: {
    url: `${process.env.DB_URL}-development`,
    dialect: 'postgres',
    migrationStorageTableName: `monthly-expenses-meta-${process.env.NODE_ENV}`,
  },
  production: {
    url: `${process.env.DB_URL}-production`,
    dialect: 'postgres',
    migrationStorageTableName: `monthly-expenses-meta-${process.env.NODE_ENV}`,
  },
  test: {
    url: `${process.env.DB_URL}-test`,
    dialect: 'postgres',
    migrationStorageTableName: `monthly-expenses-meta-${process.env.NODE_ENV}`,
  },
};
