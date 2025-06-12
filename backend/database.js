const { Pool } = require('pg');
require('dotenv').config();

const db = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

db.connect((err, client, release) => {
  if (err) {
    return console.error('Koneksi database gagal:', err.stack);
  }
  console.log('Terhubung ke database PostgreSQL');
  release(); // supaya koneksinya dilepas
});

module.exports = db;
