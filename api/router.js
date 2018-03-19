const queries = require('../db/queries');
const express = require('express');

const router = express.Router();


router.get('/projects', (req, res, next) => {
  queries.getAllProjects().then(projects => {
    res.json(projects)
  });
});

module.exports = router;
