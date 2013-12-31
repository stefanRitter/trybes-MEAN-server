module.exports = function (email) {
  'use strict';
  return email.match(/^[\S]+@[\S]+\.[\S]+$/);
};
