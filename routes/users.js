'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
  
  function index (req, res) {
    res.json(200, []);
  }

  function show (req, res) {
    res.json(404, {});
  }

  function update (req, res) {
    res.json(403, {});
  }

  app.get('/app/users/:id', show);
  app.post('/app/users/:id', update);

  app.get('/app/users', index);
};
