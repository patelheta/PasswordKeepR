const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

module.exports = (obj) => {

  router.get('/', (req, res) => {
    res.render('login');
  });

  router.post('/', (req, res) => {
    const { email, password } = req.body;
    obj
      .authenticateUser(email, password)
      .then((user) => {
        if (!user) {
          res.render('index.ejs', { error: true });
          return;
        }
        req.session['user_id'] = user.id;
        req.session['organization_id'] = user.organization_id;

        res.redirect("/main");
      })
      .catch((err) => res.send('Error', err));
  });

  return router;
};

// router.use(cookieSession({
//   name: 'session',
//   keys: ['CHARLES'],
//   maxAge: 24 * 60 * 60 * 1000
// }));

// router.get('/', (req, res) => {
//   res.render('login');
// });

// router.post('/', (req, res) => {
//   res.redirect('/login/:id');
// });

// router.get('/:id', (req, res) => {
//   req.session.user_id = req.params.id;
//   res.redirect('/');
// });

// router.get('/register', (req, res) => {
//   res.redirect('/register');
// });

// module.exports = router;
