const express = require('express');
const router = express.Router();
const { client } = require('../services/db');

router.get('/', (req, res) => {
  let limit = 10;
  pageNumber = 2;
  offset = limit * pageNumber - limit;
  client.query(
    `SELECT * FROM users_data LIMIT ${limit} OFFSET ${offset}`,
    (error, results) => {
      res.status(200).json(results.rows);
    }
  );
});

router.get('/:id', (req, res) => {
  client.query(
    `SELECT * FROM users_data WHERE id=${req.params.id}`,
    (error, results) => {
      res.status(200).json(results.rows);
    }
  );
});

module.exports = router;
