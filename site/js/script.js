  var status = 0;
  var word = document.getElementById('form');
  var bckg = document.getElementById('inner__wrapper');
  var formInit = document.getElementById('form');

function show(form) {
  if (status == 0) {
    form.style.zIndex= "5";
    form.style.opacity = "1";

    bckg.style.filter = "blur(18px)";
    bckg.style.filter = "blur(18px) | opacity(.5)";
    bckg.style.pointerEvents = "none";
    formInit.style.display = "block";


    status = 1;
  } else {
    form.style.zIndex= "-5";  
  	form.style.opacity = "0";

  	bckg.style.filter = "blur(0px)";
    bckg.style.filter = "blur(0px)";
    bckg.style.pointerEvents = "initial";
    formInit.style.display = "none";

  	status = 0;
  } 
};






























