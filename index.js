const express = require('express');
require('dotenv').config();
const path = require('path');
const chalk = require('chalk');
const { connectDB } = require('./services/db');

const app = express();
await connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hi Node!');
});

app.use('/pictures', express.static(path.join(__dirname, 'assets')));

app.use('/api/users', require('./routes/users'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.italic.yellowBright(`Server listening on ${port} port`));
});
