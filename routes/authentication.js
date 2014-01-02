var cleanString = require('../helpers/clean_string');

module.exports = function (app) {
  'use strict';
  
  function temp (req, res) {
    res.render('index', { title: 'TEMP' });
  }

  function login (req, res, next) {
  	var email = cleanString(req.param('email')).toLowerCase(),
  		pass = cleanString(req.param('pass'));
  }

  app.post('/login', login);
  app.post('/signup', temp);
  app.post('/logout', temp);
};