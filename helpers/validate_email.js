'use strict';

module.exports = function (email) {
  return email.match(/^[\S]+@[\S]+\.[\S]+$/);
};
