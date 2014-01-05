'use strict';

var pages = require('./pages'),
    authentication = require('./authentication');

module.exports = function(app) {

  // pages routes
  pages(app);

  // app routes
  authentication(app);

};
