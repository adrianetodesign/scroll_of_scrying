const express = require('express');
const router = express.Router();
const playerQueries = require('../db/queries/player_queries.js');

module.exports = (db) => {

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    playerQueries.getPlayerWithId(id, db)
      .then((data) => {
        res.send(data);
      });
  });

  router.get('/conditions/:id', (req, res) => {
    const id = req.params.id;
    playerQueries.getPlayerConditions(id, db)
      .then((data) => {
        res.send(data);
      });
  });
  return router;
};