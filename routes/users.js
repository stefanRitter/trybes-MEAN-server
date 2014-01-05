'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
  
  function temp () {

  }

  app.get('/app/users/:id', temp);
  app.get('/app/users', temp);
  
  app.post('/app/users/:id', temp);
};
