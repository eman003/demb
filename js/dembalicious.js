/*	DATE CREATED: 16 FEBRUARY 2017
	CREATED BY: FULUFHELO MUKWEVHO
	WEBSITE: https://eman003.github.io

	YOU SHOULDN'T BE SEEING THIS 
	BUT THE FACT THAT YOU'RE
	SEEING IT IT MEANS YOU'RE
	TOO DAMN CURIOUS SO GO AHEAD
	AND VISIT MY WEBSITE AND SEE
	IF I CAN'T HELP YOU WITH 
	SOMETHING.*/

$(document).ready(function() {

	//SHOWING AND HIDING LOGO   

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 300) {
	        $("#brand").fadeIn(2000);
	        $(".brand-text").hide();
	    } else {
	        $("#brand").fadeOut();
	        $(".brand-text").fadeIn(2000);
	    }
	});

	//SMOOTH SCROLL

	$("a").on('click', function(event) {
		    if (this.hash !== "") {
		      event.preventDefault();
		      var hash = this.hash;
		      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 800, function(){
		        window.location.hash = hash;
		      });
		    }
		  });

	//WOW JS INITIALIZER

	var wow = new WOW(
	{
		 mobile: false
	});
	wow.init();
});

(() => {
		'use strict';

		document.querySelector('.full-price-btn').addEventListener('click', getPrices);

		function getPrices() {
			const xhr = new XMLHttpRequest();

			xhr.open('GET', 'documents/dembalicious-price-list.pdf', true);
			xhr.onload = () => {
				if (xhr.status === 200) {
					let data = xhr.responseText;
					 alert(data);
				}
			}
			xhr.send();
		}
	})();

