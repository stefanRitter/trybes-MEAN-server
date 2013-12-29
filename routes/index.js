var pages = require('./pages');

module.exports = exports = function(app) {
  'use strict';

  // homepage routes
  app.get('/', pages.getIndex);
  app.post('/', pages.postIndex);

  app.get('/about', pages.getAbout);
  app.post('/about', pages.postAbout);

  // app routes

  // admin routes

  // 404
  app.get('*', function(req, res) { res.status(404).sendfile('./public/404.html'); });
};
