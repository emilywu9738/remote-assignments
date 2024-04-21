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

async function checkUser(email, password) {
  const [result] = await pool.query(
    `
    SELECT * FROM user WHERE email = ?
    `,
    [email, password]
  );
  return result;
}

async function createUser(email, password) {
  const result = await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES(?, ?)
    `,
    [email, password]
  );
}

async function loginUser(email, password) {
  const [result] = await pool.query(
    `
    SELECT * FROM user WHERE email = ? AND password = ?
    `,
    [email, password]
  );
  return result;
}

module.exports = { createUser, loginUser, checkUser };
