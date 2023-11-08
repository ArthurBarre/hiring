// db.ts
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
  console.log('Connected to the MySQL server.');
});

export default connection;
