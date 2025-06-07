const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12783293',
  password: 'RbQJQr4u7b',
  database: 'sql12783293',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database connected');
});

module.exports = db;
