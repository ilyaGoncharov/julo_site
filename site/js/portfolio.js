$(document).scroll(function () {
	var carusel = 0;
    var y = $(this).scrollTop();
    if (y > 10 && status == 0) {
        $('.icon__bar').fadeIn();
        $('.arrow').fadeOut();
        /*carusel = 1;*/
    } else {
        $('.icon__bar').fadeOut();
        $('.arrow').fadeIn();
        /*carusel = 0;*/
    }
});

$(document).ready(function(){
     $('body,html').animate({scrollTop: 156}, 1600); 
});

$('.carousel').carousel({
  interval: 10000,
  pause: 'hover',
  wrap: true
});