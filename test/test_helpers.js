'use strict';

// ensure the NODE_ENV is set to 'test'
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
    datastoreURI = 'mongodb://localhost/trybes-test',
    app = require('../app'),
    http = require('http'),
    server = {};

before(function () {
  // mongoose.set('debug', true);
  server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
  });
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
      clearDB();
    });
  } else {
    clearDB();
  }
});

after(function (done) {
  server.close(function() {
    mongoose.disconnect(function () {
      done();
    });
  });
});

exports.app = app;
exports.server = server;
