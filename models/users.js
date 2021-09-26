'use strict';

const { client } = require('../services/db');

class Users {
  constructor(sql) {
    this._sql = sql;
  }

  async _query(sql, parameters) {
    return await client.query(sql, parameters);
  }

  async getUsers(limit, pageNumber) {
    this._sql =
      'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data LIMIT $1 OFFSET $2';
    const offset = limit * pageNumber - limit;
    return await this._query(this._sql, [limit, offset]);
  }

  async getUserById(parameters) {
    this._sql =
      'SELECT id, first_name, last_name, email, gender, avatar, country, phone_number FROM users_data WHERE id=$1';
    return await this._query(this._sql, [parameters]);
  }
}

module.exports = Users;
