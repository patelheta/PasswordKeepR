const db = require('../connection');

const getOrganizations = () => {
  return db.query('SELECT * FROM organizations;')
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getOrganizations };
