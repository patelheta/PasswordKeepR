const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/', (req, res) => {
    body = req.body;
    db.query(
      `
      DELETE FROM user_websites WHERE name = $1;
      `, [body.website]);
      res.send('');
  })
  return router;
};
