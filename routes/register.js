const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', (req, res) => {

  const users = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    organization_id: req.body.organization_id,
  };

  res.redirect('/');
});

module.exports = router;

// const addNewUser = async function (user) {
//   try {
//     const hash = await argon2.hash(user.user_password);
//     const orgID = await db.query(
//       `SELECT id FROM organizations WHERE name = $1`,
//       [user.organization_name]
//     );
//     const newUser = await db.query(
//       `INSERT INTO users(NAME, EMAIL, USER_PASSWORD, ORGANIZATION_ID)
//     VALUES ($1, $2, $3, $4) RETURNING *;`,
//       [user.name, user.email, hash, Number(orgID.rows[0]["id"])]
//     );
//     return newUser.rows[0];
//   } catch (err) {
//     console.log("error:", err.message);
//   }
// };


// const getUserByEmail = async function (email) {
//   try {
//     const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
//       email,
//     ]);
//     if (user.rows.length === 0) {
//       return null;
//     }
//     return user.rows[0];
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// module.exports = (obj) => {

//   const loggedIn = (req) => {
//     if (req.session.organization_id) return req.session.user_id;
//     return false;
//   }

//   router.get('/', (req, res) => {
//     const user_id = loggedIn(req);

//     if (user_id) {
//       res.redirect('/main');
//     } else {
//       const templateVars = {
//         user_id: req.session['user_id'],
//       };
//       res.render('register', templateVars);
//     }
//   });

//   router.post('/', (req, res) => {
//     const users = {
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       password: req.body.password,
//       organization_id: req.body.organization_id,
//     };

//     obj
//       .getUserByEmail(users.email)
//       .then((user) => {
//         if (user) {
//           return res.send('User already exists!');
//         }
//         obj.addNewUser(users).then((user) => {
//           req.session['user_id'] = user_id;
//           req.session['organization_id'] = user.organization_id;
//           return res.redirect('/main');
//         });
//       })
//       .catch((err) => {
//         console.log('Error', err);
//       });
//   });
//   return router;
// };
