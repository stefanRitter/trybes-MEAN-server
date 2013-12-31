var mongoose = require('mongoose'),
    validateEmail = require('../helpers/validate_email'),
    schema;

schema = mongoose.Schema({
  email: { type: String, lowercase: true, trim: true, validate: validateEmail, required: true },
  name: { type: String, required: true },
  salt: { type: String, required: true },
  hash: { type: String, required: true },

  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', schema);
