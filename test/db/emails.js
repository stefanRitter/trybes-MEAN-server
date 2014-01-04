'use strict';

var assert = require('assert'),
    mongoose = require('mongoose'),
    Email = require('../../db/emails'),
    datastoreURI = 'mongodb://localhost/trybes-test';

describe('Email', function () {
  before(function() {
    mongoose.set('debug', true);
    mongoose.connect(datastoreURI, function (err) { if (err) { throw err; }});
  });

  after(function() {
    mongoose.connection.close();
  });


  describe('test', function() {
    it('is a test', function () {
      assert(true);
    });
  });
});
