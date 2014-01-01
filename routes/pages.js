module.exports = function (app) {
  'use strict';
  
  function getIndex (req, res) {
    res.render('index', { title: 'TRYBES' });
  }

  function getAbout (req, res) {
    res.render('about', { title: 'TRYBES - About' });
  }

  function postEmail (req, res) {
    res.render('about', { title: 'XXXX' });
  }


  app.get('/', getIndex);
  app.post('/', postEmail);

  app.get('/about', getAbout);
  app.post('/about', postEmail);
};
