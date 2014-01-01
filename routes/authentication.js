module.exports = function (app) {
  'use strict';
  
  function temp (req, res) {
    res.render('index', { title: 'TEMP' });
  }

  app.post('/login', temp);
  app.post('/signup', temp);
  app.post('/logout', temp);
};