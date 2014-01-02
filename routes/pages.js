var mongoose = require('mongoose'),
    Email = mongoose.model('Email'),
    cleanString = require('../helpers/clean_string');

module.exports = function (app) {
  'use strict';
  
  function getIndex (req, res) {
    res.render('index', { title: 'TRYBES', token: req.session._csrf });
  }

  function getAbout (req, res) {
    res.render('about', { title: 'TRYBES - About', token: req.session._csrf });
  }

  function postEmail (req, res) {
    var emailAddress = cleanString(req.param('email'));
    
    Email.create({_id: emailAddress}, function(err, newEmail) {
      if (err) {
        res.redirect('/');
      } else {
        res.render('index', {title: 'TRYBES', success: true});
      }
    });
  }


  app.get('/', getIndex);
  app.post('/', postEmail);

  app.get('/about', getAbout);
  app.post('/about', postEmail);
};
