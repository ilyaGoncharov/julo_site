$('#contactForm').submit(function(e) {
	var name = document.getElementById('contact__form--name'),
		email = document.getElementById('contact__form--email'),
		message =	document.getElementById('contact__form--message');

	if (!name.value || !email.value || !message.value) {
		alertify.error('Проверьте введенные данные!')
	}	else {
		$.ajax({
		    url: "https://formspree.io/karnebero@gmail.com", 
		    method: "POST",
		    data: $(this).serialize(),
		    dataType: "json"
		});
		e.preventDefault()
		$(this).get(0).reset() 
		alertify.alert('Сообщение отправленно!')
	}
});