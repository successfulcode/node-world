'use strict';

const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({
  user: process.env.DBuser,
  host: process.env.DBhost,
  database: process.env.DBdatabase,
  password: process.env.DBpassword,
  port: process.env.DBport
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log(chalk.italic.bgBlueBright('PostgreSQL connected...'));
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
};

const query = async (sql, parameters) => {
  return await client.query(sql, parameters);
};

module.exports = { client, connectDB, query };
