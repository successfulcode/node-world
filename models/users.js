'use strict';

const { client } = require('../services/db');

class Users {
  constructor(sql) {
    this.sql = sql;
  }

  async query(parameters) {
    return await client.query(this.sql, parameters);
  }
}

const getUsers = new Users(
  'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data LIMIT $1 OFFSET $2'
);
const getUserById = new Users(
  'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data WHERE id=$1'
);

module.exports = { getUsers, getUserById };
