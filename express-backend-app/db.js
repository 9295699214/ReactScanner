// db.js
const pool = require('./dbConfig');

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error connecting to the database', err);
  process.exit(-1);
});

module.exports = pool;
