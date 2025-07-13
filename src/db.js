const { Pool } = require('pg');

const pool = new Pool({
  user: 'vacunas_user',
  host: '192.168.1.70',
  database: 'vacunas_db',
  password: 'vacunas_pass',
  port: 5432,
});

module.exports = pool;
