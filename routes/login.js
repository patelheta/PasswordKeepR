const express = require('express');
<<<<<<< HEAD
const router  = express.Router();
=======
const router = express.Router();
>>>>>>> 2f2c622160a365b773ad675fae04cbc5353dc731

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
          res.render('login', { error: true });
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
