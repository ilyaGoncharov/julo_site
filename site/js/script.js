var status = 0;
var word = document.getElementById('form');
var bckg = document.getElementById('inner__wrapper');

function show(form) {
  if (status == 0) {
    form.style.zIndex= "5";
    form.style.opacity = "1";

    bckg.style.filter = "blur(12px)";
    bckg.style.filter = "blur(12px)";

    status = 1;
  } else {
    form.style.zIndex= "-5";  
  	form.style.opacity = "0";

  	bckg.style.filter = "blur(0px)";
    bckg.style.filter = "blur(0px)";

  	status = 0;
  } 
};






























