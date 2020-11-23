const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '11spinblade',
  host: 'localhost',
  port: 5432,
  database: 'clothingwebstoredb',
});

module.exports = pool;
