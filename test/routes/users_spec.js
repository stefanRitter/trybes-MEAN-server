'use strict';

require('../test_helpers');

var request = require('supertest'),
    app = require('../../app'),
    http = require('http'),
    server = {};

describe('Users REST-API', function() {
  before(function () {
    server = http.createServer(app).listen(app.get('port'), function () {
      console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
    });
  });

  after(function (done) {
    app.locals.mongooseConnection.close(function(){
      server.close(function() {
        done();
      });
    });
  });


  describe('GET /users', function() {
    it('should return an array of users ordered by location', function(done) {
      request(app)
        .get('/users')
        .expect(200, done);
    });
  });

  describe('GET /users/:id', function() {
    it('should return a user by id', function(done) {
      request(app)
        .get('/users/200')
        .expect(200, done);
    });
  });

  describe('POST /users/:id', function() {
    it('should prevent unauthorized editing', function(done) {
      request(app)
        .post('/users/200')
        .expect(403, done);
    });

    it('should update a user when authorized', function(done) {
      request(app)
        .post('/users/200')
        .expect(200, done);
    });
  });
});
