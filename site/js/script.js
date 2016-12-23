/*$(document).ready(function(){
	$('#crossburger').click(function(){
		$(this).toggleClass('open');
	});
});*/


(function() {

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

})();

var status = 0;
var texter = document.getElementById('texter');
var texterInner = document.getElementById('texter__inner');
function show(menu) {
	if (status == 0) {
		menu.style.opacity= "1";
		menu.style.zIndex= "3";
		menu.style.transition = "0.2s";

		logo1.style.display= "block";
		logo0.style.display= "none";

	    status = 1;
	} else {
		menu.style.opacity= ".0";
		menu.style.zIndex= "0";
	    menu.style.transition = "0.3s";

	    logo1.style.display= "none";
		logo0.style.display= "block";

	    status = 0;
	} 
};






























