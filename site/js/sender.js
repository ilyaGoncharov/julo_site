$(function() {
	$('#contactForm').submit(function(event) {
		event.preventDefault();
		var formValid = true;
		// перебираем все элементы управления формы (input и textarea) 
		$('#contactForm input,textarea').each(function() {
			// находим предков, имеющих класс .form-group (для установления success/error)	
			 var formGroup = $(this).parents('.form-group');
	      	// находим glyphicon (иконка успеха или ошибки) 
	      	// 
	      	 var glyphicon = formGroup.find('.form-control-feedback');
	      	// выполняем валидацию данных с помощью HTML5 функции checkValidity
	     	 if (this.checkValidity()) {
	        // добавляем к formGroup класс .has-success и удаляем .has-error
	         formGroup.addClass('has-success').removeClass('has-error');
	        // добавляем к glyphicon класс .glyphicon-ok и удаляем .glyphicon-remove
	         glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove'); 
			} else {
				// добавляем к formGroup класс .has-error и удаляем .has-success
		     	formGroup.addClass('has-error').removeClass('has-success');
			    // добавляем к glyphicon класс glyphicon-remove и удаляем glyphicon-ok
			    glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
			    // если элемент не прошёл проверку, то отмечаем форму как не валидную 
			    formValid = false;  
			}
		});
		if (formValid) {
		  //получаем имя, которое ввёл пользователь	
		  var name = $("#name").val();	
		  //получаем email, который ввёл пользователь
	      var email = $("#email").val();
		  //получаем сообщение, которое ввёл пользователь
	      var message = $("#message").val();
		  //получаем капчу, которую ввёл пользователь
	      var captcha = $("#text-captcha").val();

	      // объект, посредством которого будем кодировать форму перед отправкой её на сервер
	      var formData = new FormData();
	      // добавить в formData значение 'name'=значение_поля_name
	      formData.append('name', name);
	      // добавить в formData значение 'email'=значение_поля_email
	      formData.append('email', email);
	      // добавить в formData значение 'message'=значение_поля_message
	      formData.append('message', message);
	      // добавить в formData значение 'captcha'=значение_поля_captcha
	      formData.append('captcha', captcha);

	      //отправляем данные на сервер (AJAX)
	      $.ajax({
			//метод передачи запроса - POST
	        type: "POST",
			//URL-адрес запроса 
	        url: "/js/feedback/process.php",
	        //передаваемые данные - formData
	        data: formData,
	        // не устанавливать тип контента, т.к. используется FormData
	        contentType: false,
	        // не обрабатывать данные formData
	        processData: false,
	        // отключить кэширование результатов в браузере
	        cache: false,
		    	//при успешном выполнении запроса
	        success : function(data){
	        	// разбираем строку JSON, полученную от сервера
	          	var $data =  JSON.parse(data);
	          	// устанавливаем элементу, содержащему текст ошибки, пустую строку
	          	$('#error').text('');
	 
	          	// если сервер вернул ответ success (данные получены)
	          	if ($data.result == "success") {
	 
				// скрываем форму обратной связи
	            $('#contactForm').hide();
				// удаляем у элемента, имеющего id=successMessage, класс hidden
	            $('#successMessage').removeClass('hidden');
	    		}	else {
	        			// если сервер вернул ответ error, то делаем следующее...
	        			$('#error').text('Произошли ошибки при отправке формы на сервер.');
	      			}
	      		},
	        error: function (request) {
	          $('#error').text('Произошла ошибка ' + request.responseText + ' при отправке данных.');
	        }        
	      });
		}
	});
});