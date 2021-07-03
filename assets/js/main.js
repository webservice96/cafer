;
(function ($) {
	"use strict";
	$(document).ready(function () {

		$(".hero-area").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			dots: true,
			nav: false,
		});

		$(".food-carousel").owlCarousel({
			items: 3,
			margin: 20,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			dots: true,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				}
			}
		});

		$(".t-l-content").owlCarousel({
			items: 1,
			margin: 20,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			dots: true,
			nav: false,
		});

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000,
			speedAsDuration: true
		});

		$('body').scrollspy({
			target: ".header-area",
			offset: 50
		});

		$("#mainmenu-area").sticky({
			topSpacing: 0
		});

		$('.mainmenu').slicknav({
			label: '',
			duration: 500,
			prependTo: '',
			closedSymbol: '<i class="fa fa-angle-right"></i>',
			openedSymbol: '<i class="fa fa-angle-right"></i>',
			appendTo: '.header-area',
			menuButton: '.toggle',
			closeOnClick: 'true',
		});

		$(".toggle").click(function () {
			$(".toggle").toggleClass("active");
		});

		new WOW().init({
			mobile: false,
		});

		$(".preloader").fadeOut("slow");

		$('[data-toggle="tooltip"]').tooltip();

		$('#mc-form').ajaxChimp({
			url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&id=d0323b0697', //Set Your Mailchamp URL
			callback: function (resp) {
				if (resp.result === 'success') {
					$('.subscribe .input-box, .subscribe .bttn-4').fadeOut();
				}
			}
		});
	});
})(jQuery);