var pages = require('./pages');

module.exports = function(app) {
  'use strict';

  // pages routes
  app.get('/', pages.getIndex);
  app.post('/', pages.postEmail);

  app.get('/about', pages.getAbout);
  app.post('/about', pages.postEmail);

  // app routes

  // admin routes

};
