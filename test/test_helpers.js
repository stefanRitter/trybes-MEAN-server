'use strict';

// ensure the NODE_ENV is set to 'test'
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
    datastoreURI = 'mongodb://localhost/trybes-test',
    app = require('../app');

before(function () {
  // mongoose.set('debug', true);
});

beforeEach(function (done) {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].drop();
    }
    done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(datastoreURI, function (err) {
      if (err) { throw err; }
      console.log('connected');
      clearDB();
    });
  } else {
    clearDB();
  }
});

after(function (done) {
  mongoose.disconnect(function () {
    done();
  });
});

exports.app = app;
