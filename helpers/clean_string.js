
module.exports = function validString (s) {
  'use strict';

  if ('string' !== typeof s) {
    s = '';
  }
  return s.trim();
};
