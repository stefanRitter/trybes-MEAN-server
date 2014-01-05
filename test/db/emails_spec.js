'use strict';

require('should');
require('../test_helpers');

var Email = require('../../db/emails');

describe('Email', function () {
  
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
