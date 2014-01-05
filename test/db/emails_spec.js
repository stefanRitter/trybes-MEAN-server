'use strict';

require('should');

var mongoose = require('mongoose'),
    Email = require('../../db/emails'),
    datastoreURI = 'mongodb://localhost/trybes-test';

describe('Email', function () {
  before(function() {
    mongoose.set('debug', true);
    mongoose.connect(datastoreURI, function (err) { if (err) { throw err; }});
  });

  after(function() {
    mongoose.connection.collections.emails.drop(function() {
      mongoose.connection.close();
    });
  });


  describe('should validate the email address', function() {
    it('should save a valid email', function (done) {
      var validEmail = { _id: 'valid@email.com'};

      Email.create(validEmail, function(err, newEmail) {
        newEmail._id.should.equal('valid@email.com');
        done();
      });
    });

    it('should reject an invalid email', function (done) {
      var invalidEmail = { _id: 'invalid'};

      Email.create(invalidEmail, function(err) {
        err.name.should.equal('ValidationError');
        done();
      });
    });

    it('should not allow dublicates', function (done) {
      var dub = { _id: 'test@test.com' };

      Email.create(dub, function () {
        Email.create(dub, function (err) {
          err.code.should.equal(11000);
          done();
        });
      });
    });
  });
});
