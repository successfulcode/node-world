'use strict';

const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../models/users');

router.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const offset = limit * pageNumber - limit;
    const results = await getUsers.query([limit, offset]);
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
    const userId = req.params.id;
    const results = await getUserById.query([userId]);
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
