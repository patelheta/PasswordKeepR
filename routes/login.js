const express = require('express');
const router = express.Router();

// module.exports = (obj) => {

//   router.post('/', (req, res) =>{
//     const { email, password } = req.body;
//     obj
//       .authenticateUser(email, password)
//       .then((user) => {
//         if (!user) {
//           res.render('login/:id', { error: true });
//           return;
//         }
//         req.session['user_id'] = user.id;
//         req.session['organization_id'] = user.organization_id;

//         res.redirect('/main');
//       })
//       .catch((err) => {
//         console.log('Error', err);
//     });
//   });

//   return router;
// };

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  req.session.user_id = 1;
  // res.redirect('/login/:id');
  res.redirect('/');
});

router.get('/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

router.get('/register', (req, res) => {
  res.redirect('/register');
});

module.exports = router;
