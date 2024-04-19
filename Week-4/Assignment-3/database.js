const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function createUser(email, password) {
  const result = await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES(?, ?)
    `,
    [email, password]
  );
}

module.exports = createUser;
