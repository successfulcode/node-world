const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port} port`);
});

app.get('/', (req, res) => {
  res.send('Hi Node!');
});

app.get('/posts', (req, res) => {
  res.send('Hi Posts!');
});

app.get('/users/:id', (req, res) => {
  res.status(200).send('ok');
  res.send(`Hi Users!${req.originalUrl} ${req.method} ${req.params.id}`);
});

app.use('/pictures', express.static(path.join(__dirname, 'assets')));
