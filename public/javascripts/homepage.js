jQuery(function($) {
  'use strict';

  var imgSpinner = new Image();
  imgSpinner.src = '/images/spinner-white.png';
  imgSpinner.className = 'animRotateRound';

  $('button').on('click touch', function(e) {
    var email = $('input[type=email]').val();
    if (validateEmail(email)) {
      $(e.target).html(imgSpinner).prev('input').css('opacity', '0.8');
      $('.error').addClass('hidden');
    } else {
      e.preventDefault();
      $('.error').removeClass('hidden');
    }
  });

  function validateEmail(email) {
    return email.match(/^[\S]+@[\S]+\.[\S]+$/);
  }
});
