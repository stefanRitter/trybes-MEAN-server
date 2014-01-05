'use strict';

var mongoose = require('mongoose'),
    datastoreURI = 'mongodb://localhost/trybes-test';

// ensure the NODE_ENV is set to 'test'
process.env.NODE_ENV = 'test';

beforeEach(function (done) {

  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].drop();
    }
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.set('debug', true);
    mongoose.connect(datastoreURI, function (err) {
      if (err) { throw err; }
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
