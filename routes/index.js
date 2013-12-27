var pages = require('./pages');

module.exports = exports = function(app) {
  'use strict';

  // homepage routes
  app.get('/', index);

  app.get('/about', about);

  // 404
  app.get('*', function(req, res) { res.status(404).sendfile('./views/404.html'); });


  // request handlers
  function index(req, res) {
    res.render('index', { title: 'TRYBES' });
  }

  function about(req, res) {
    res.render('about', { title: 'TRYBES - About' });
  }
};