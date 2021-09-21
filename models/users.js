const { client } = require('../services/db');

const users = {
  async getUsers(pageNumber, limit) {
    let offset = limit * pageNumber - limit;
    let sql = 'SELECT * FROM users_data LIMIT $1 OFFSET $2';
    return await client.query(sql, [limit, offset]);
  },
  async getUserById(userId) {
    let sql = 'SELECT * FROM users_data WHERE id=$1';
    return await client.query(sql, [userId]);
  }
};

module.exports = users;
