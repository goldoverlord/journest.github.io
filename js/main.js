$(document).ready(function(){
  // header dropdown toggle
  $('.js-header-toggle').click(function(){
    $('body').toggleClass('is-show-dropdown lock');
  });
})();

 var onloadCallback = function() {
    alert("grecaptcha is ready!");
 };