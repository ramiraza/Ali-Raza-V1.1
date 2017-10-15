// creating a navigation scroll effect

window.addEventListener('scroll', function() {
  var scroll = $(window).scrollTop();
  var $navbar = $('.navbar');
  
  if (scroll >= 100) {
    $navbar.addClass('navScroll');
  } else {
    $navbar.removeClass('navScroll');
  }
});

var $navbarCollapse = $('.navbar-toggle');

$navbarCollapse.on('click', function() {
  if($('.navbar-collapse').hasClass('in')) {
    $('.navbarScroll').css('padding-bottom', '0px')
  } else {
    $('.navbarScroll').css('padding-bottom', '0px')
  }
});