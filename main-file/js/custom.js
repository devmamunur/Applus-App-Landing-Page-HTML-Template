(function ($) {
	'use strict';
		
		//nav collapse
		$('.nav-link').on('click', function () {
			$('.navbar-collapse').collapse('hide');
		});

	function a(e) {
		k.removeClass("active"), e.addClass("active")
	}
	var b = $(".owl-features"),
		k = $(".feature-link");
	b.owlCarousel({
			loop: !0,
			responsiveClass: !0,
			margin: 20,
			autoplay: !0,
			items: 1,
			nav: !1,
			dots: !1,
			animateOut: "fadeOut",
			animateIn: "fadeIn"
		}),
		b.on("changed.owl.carousel", function (e) {
			var o = e.item.index + 1 - e.relatedTarget._clones.length / 2,
				n = e.item.count;
			(o > n || 0 == o) && (o = n - o % n), o--;
			var t = $(".feature-link:nth(" + o + ")");
			a(t)
		}),
		k.on("click", function () {
			var e = $(this).data("owl-item");
			b.trigger("to.owl.carousel", e), a($(this))
		});

	//nav toggle 
	$('#nav-icon2').on('click', function () {
		$(this).toggleClass('open');
	});

	// welcome banner slider js
	$(".welcome_slides").owlCarousel({
		loop: !0,
		responsiveClass: !0,
		items: 1,
		nav: !1,
		dots: !0,
		autoplay: !0,
		margin: 20,
		animateOut: "bounceOutRight",
		animateIn: "bounceInLeft"
	});
	// latest news slider js
	$(".owl-news").owlCarousel({
		loop: !0,
		responsiveClass: !0,
		dots: !0,
		margin: 20,
		nav: !1,
		stagePadding: 10,
		responsive: {
			0: {
				items: 1,
				margin: 300
			},
			500: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	//team_slider js
	$('.team_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dot: true,
		speed: 1000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	//Screenshot Slider
	$('.screenshots-slider').owlCarousel({
		loop: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		margin: 10,
		center: true,
		responsive: {
			0: {
				items: 2,
				nav: false
			},
			768: {
				items: 2,
				nav: false
			},
			991: {
				items: 3,
				nav: false
			},
			1200: {
				items: 4
			},
			1920: {
				items: 4
			}
		}
	});

	//testimonial js

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		slide: 'div',
		autoplay: true,
		centerMode: true,
		centerPadding: '30px',
		mobileFirst: true,
		prevArrow: '<i class="fa fa-angle-left"></i>',
		nextArrow: '<i class="fa fa-angle-right"></i>'
	});


	// Create the carousel.
	$('.kc-wrap').KillerCarousel({
		// Default natural width of carousel.
		width: 460,
		// Item spacing in 3d (has CSS3 3d) mode.
		spacing3d: 60,
		// Item spacing in 2d (no CSS3 3d) mode. 
		spacing2d: 120,
		showReflection: true,
		// Looping mode.
		infiniteLoop: true,
		// Scale at 75% of parent element.
		autoScale: 100
	});

	// venobox
	$('.venobox_video').venobox({
		autoplay: true,
	});

	//  Footer Reveal Active Code
	if ($.fn.footerReveal) {
		$('footer').footerReveal({
			shadow: true,
			shadowOpacity: 0.3,
			zIndex: -101
		});
	}
	//  ScrollUp Active Code
	if ($.fn.scrollUp) {
		$.scrollUp({
			scrollSpeed: 1500,
			scrollText: '<i class="fa fa-chevron-up" aria-hidden="true"></i>'
		});
	}

	//  CounterUp Active Code
	if ($.fn.counterUp) {
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	//  onePageNav Active Code
	if ($.fn.onePageNav) {
		$('#nav').onePageNav({
			currentClass: 'active',
			scrollSpeed: 2000,
			//easing: 'easeOutQuad',
			scrollOffset: 0,
			//scrollThreshold: 0.001
		});
	}
	if ($.fn.onePageNav) {
		$('.h-link').onePageNav({
			currentClass: 'active',
			scrollSpeed: 2000,
			//easing: 'easeOutQuad',
			scrollOffset: 0,
			//scrollThreshold: 0.001
		});
	}

   /* Offset start */
	 var html_body = $('html, body'),
	 nav = $('nav'),
	 navOffset = nav.offset().top,
	 $window = $(window);
 /* offset ends */

 $('.mybutton').on('click', function () {
	 if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		 var target = $(this.hash);
		 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		 if (target.length) {
			 html_body.animate({
				 scrollTop: target.offset().top - 30
			 }, 2000);
			 return false;
		 }
	 }
 });
	$(window).on('scroll', function (event) {
		if ($(window).scrollTop()) {
			$('.header_area').addClass('sticky');
		} else {
			$('.header_area').removeClass('sticky');
		}
	});

	$window.on('load', function () {
		$(".preeloader").fadeOut(1000);
});
})(jQuery);