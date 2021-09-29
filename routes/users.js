'use strict';

const express = require('express');
const router = express.Router();
const Users = require('../models/users');

const users = new Users();

router.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const results = await users.getUsers(limit, pageNumber);
    if (!results) {
      return res.status(404).json({ msg: 'Users not found' });
    } else {
      return res.status(200).json(results.rows);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const results = await users.getUserById(userId);
    if (!results) {
      return res.status(404).json({ msg: 'User not found' });
    } else {
      res.status(200).json(results.rows);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
