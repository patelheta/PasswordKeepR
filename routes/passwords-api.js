const express = require('express');
const router = express.Router();
const categoriesQuery = require('../db/queries/categories');
const passwordsQuery = require('../db/queries/passwords');

router.get('/', (req, res) => {
  passwordsQuery.getAllPasswords(req.query)
    .then(passwords => {
      res.json({ passwords });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
router.get('/categories', (req, res) => {
  categoriesQuery.getcategories()
    .then(categories => {
      res.json({ categories });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
