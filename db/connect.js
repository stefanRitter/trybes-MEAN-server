'use strict';

var mongoose = require('mongoose'),
    datastoreURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/trybes';

module.exports = function (app) {
  if ('development' === app.get('env') || 'test' === app.get('env')) {
    mongoose.set('debug', true);
  }

  if ('test' === app.get('env')) {
    datastoreURI = 'mongodb://localhost/trybes-test';
  }

  // connect to datastore
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(datastoreURI, function (err) { if (err) { throw err; }});
  }

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

  return mongoose.connection;
};
