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

module.exports = { client, connectDB };
