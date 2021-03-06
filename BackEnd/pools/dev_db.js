require('dotenv').config('/env');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PW,
  host: 'localhost',
  port: 5432,
  database: process.env.DATABASE_NAME,
});

module.exports = pool;
