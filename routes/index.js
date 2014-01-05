'use strict';

var pages = require('./pages'),
    authentication = require('./authentication'),
    users = require('./users');

module.exports = function(app) {

  // pages routes
  pages(app);

  // app routes
  authentication(app);
  users(app);
};
