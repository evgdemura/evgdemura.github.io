$("#header_button").click(function () {
	$('.header_nav ul').slideToggle();
})

$('.slide_button').click(function () {
	$('.slide_button').removeClass('active');
	$(this).addClass('active');
	var slideNumber = $(this).data('number');
	var itemWidth = $('.slider_item').outerWidth(true);
	$(".our_clients-slider").css({
		transform: `translate(-${slideNumber*itemWidth*3}px)`,
		transition: "all .4s ease"
	});


})
