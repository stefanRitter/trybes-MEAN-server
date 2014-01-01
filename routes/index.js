var pages = require('./pages'),
    authentication = require('./authentication');

module.exports = function(app) {
  'use strict';

  // pages routes
  pages(app);

  // app routes
  authentication(app);

};
