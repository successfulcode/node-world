'use strict';

const { query } = require('../services/db');

class Users {
  usersSql() {
    return 'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data LIMIT $1 OFFSET $2';
  }
  userByIdSql() {
    return 'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data WHERE id=$1';
  }

  async getUsers(limit, pageNumber) {
    const offset = limit * pageNumber - limit;
    return query(this.usersSql(), [limit, offset]);
  }

  async getUserById(id) {
    return query(this.userByIdSql(), [id]);
  }
}

module.exports = Users;
