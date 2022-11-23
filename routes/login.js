const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'session',
  keys: ['CHARLES'],
  maxAge: 24 * 60 * 60 * 1000
}));

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  res.redirect('/login/:id');
});

router.get('/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

// router.get('/register', (req, res) => {
//   res.redirect('/register');
// })

module.exports = router;
