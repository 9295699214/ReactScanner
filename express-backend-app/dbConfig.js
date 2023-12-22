// dbConfig.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'aakashchopra',
  host: 'localhost',
  database: 'db_vehiclelog',
  password: '1234',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
