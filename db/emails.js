'use strict';

var mongoose = require('mongoose'),
    validateEmail = require('../helpers/validate_email'),
    schema;

schema = mongoose.Schema({
  _id: { type: String, lowercase: true, trim: true, validate: validateEmail }
});

module.exports = mongoose.model('Email', schema);
