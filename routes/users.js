const express = require('express');
const router = express.Router();
const { client } = require('../services/db');
const users = require('../models/users');

router.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    results = await users.getUsers(pageNumber, limit);
    if (!results) {
      return res.status(404).json({ msg: 'Users not found' });
    } else {
      res.status(200).json(results.rows);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    let userId = req.params.id;
    results = await users.getUserById(userId);
    if (!results) {
      return res.status(404).json({ msg: 'Users not found' });
    } else {
      res.status(200).json(results.rows);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
