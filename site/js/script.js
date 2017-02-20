var status = 0;
var word = document.getElementById('form');
var blur = document.getElementById('inner__wrapper');
/*var greybody = document.getElementsByTagName("BODY");*/
function show(form) {
	if (status == 0) {
		form.style.zIndex= "5";
		form.style.opacity = "1";
		blur.style.filter = "blur(6px)";
		/*greybody.style.filter = "grayscale(100%)";*/
	    status = 1;
	} else {
		form.style.zIndex= "-5";	
	    form.style.opacity = "0";
	    blur.style.filter = "blur(0px)";
	    $(document).ready(function(){
		     $('body,html').animate({scrollTop: 156}, 1600); 
		});
	    status = 0;
	} 
};

/*var menu = document.getElementById("myMenu");
var wrapper = document.getElementById("wrapper");	
function openMenu() {
   menu.style.top = "0px";
   // menu.style.transition = "0.8s";
   fadebar.style.wrapper = "0";
   fadebar.style.filter  = 'alpha(opacity=00)'; // IE fallback
}
function closeMenu() {
   menu.style.top = "-900px";
   menu.style.transition = "0.8s";
}
*/

/*$(document).ready(function(){
	$('#crossburger').click(function(){
		$(this).toggleClass('open');
	});
});*/

/*(function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();*/






























