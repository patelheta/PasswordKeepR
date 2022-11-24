const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    const body = req.body;

    if (body.username) {
      db.query(
        `
        UPDATE user_websites SET account_name = $1 WHERE name = $2 RETURNING *;
        `, [body.username, body.website])
    }
    if (body.password) {
      db.query(
        `
        UPDATE user_websites SET password = $1 WHERE account_name = $2 RETURNING *;
        `, [body.password, body.website])
    }
    if (body.username && body.password) {
      db.query(
        `
        UPDATE user_websites SET account_name = $1, password = $2 WHERE name = $3 RETURNING *;
        `, [body.username, body.password, body.website])
    }
    res.send('success')
  })

  return router;
};
