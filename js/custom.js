(function ($) {
	"use strict"

	//top to bottom scroll
	$('footer .up a').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	//    venobox js here
	$('.venobox').venobox();

	//nicescroll js here
	$("body").niceScroll();

	//all js ends here

})(jQuery);
