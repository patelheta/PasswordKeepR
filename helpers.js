const argon2 = require('argon2');
const { Pool } = require('pg');
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const addNewUser = async function (user) {
  try {
    const hash = await argon2.hash(user.user_password);
    const orgID = await db.query(
      `SELECT id FROM organizations WHERE name = $1`,
      [user.organization_name]
    );
    const newUser = await db.query(
      `INSERT INTO users(FIRST_NAME, LAST_NAME, EMAIL, USER_PASSWORD, ORGANIZATION_ID)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [user.first_name, user.last_name, user.email, hash, Number(orgID.rows[0]["id"])]
    );
    return newUser.rows[0];
  } catch (err) {
    console.log("Error", err);
  }
};
exports.addNewUser = addNewUser;

const getUserByEmail = async function (email) {
  try {
    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    if (user.rows.length === 0) {
      return null;
    }
    return user.rows[0];
  } catch (err) {
    console.log("Error", err);
  }
};
exports.getUserByEmail = getUserByEmail;
