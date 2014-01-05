'use strict';

require('should');

var request = require('supertest'),
    app = require('../test_helpers').app;

describe('Users routes', function() {

  before(function (done) {
    // TODO: insert dummy users
    done();
  });


  describe('GET /users', function() {
    it('should return an array of users ordered by location', function(done) {
      request(app)
        .get('/app/users')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) { throw new Error(err); }

          var result = JSON.parse(res.text);
          result.length.should.equal(4);
          result[0].location.should.equal([10, 10]);
          result[1].location.should.equal([10, 15]);
          result[2].location.should.equal([15, 15]);
          result[3].location.should.equal([20, 15]);
          
          done();
        });
    });
  });


  describe('GET /users/:id', function() {
    it('should return a user by id', function(done) {
      request(app)
        .get('/app/users/200')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) { throw new Error(err); }
          
          var result = JSON.parse(res.text);
          result.name.should.equal('Test User');
          
          done();
        });
    });
  });


  describe('POST /users/:id', function() {
    it('should prevent unauthorized editing', function(done) {
      request(app)
        .post('/app/users/200')
        .expect(403)
        .end(function (err) {
          if (err) { throw new Error(err); }
          done();
        });
    });

    it('should update a user when authorized', function(done) {
      request(app)
        .post('/app/users/200')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) { throw new Error(err); }
          
          var result = JSON.parse(res.text);
          result.email.should.equal('new@email.com');
          
          done();
        });
    });
  });
});
