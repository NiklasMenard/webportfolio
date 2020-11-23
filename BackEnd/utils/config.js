let dbClientPath = '../pools/dev_db';

if (process.env.NODE_ENV === 'prod') { dbClientPath = '../pools/prod_db'; }

// eslint-disable-next-line import/no-dynamic-require
const client = require(dbClientPath);

module.exports = client;
