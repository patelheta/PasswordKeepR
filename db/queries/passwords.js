const db = require('../connection');

const getAllPasswords = () => {
  let queryString = `SELECT * FROM user_websites;`;
  return db.query(queryString)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllPasswords };
