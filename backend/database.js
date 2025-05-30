const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12781872',
  password: 'wRV7EjPsif',
  database: 'sql12781872',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database connected');
});

module.exports = db;
