// dbConfig.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'aakash',
  host: 'localhost',
  database: 'vehiclelog',
  password: '123',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
