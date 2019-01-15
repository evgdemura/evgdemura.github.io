$('#form-date').datepicker({
	dateFormat: "dd-mm-yy"
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 400) {
		$('.scroll-button').css('transform', 'translate(0px)');
	} else {
		$('.scroll-button').css('transform', 'translate(150px)');
	}

});

$('.scroll-button').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 400);

});

function scrollToElem(elem, time) {
	var target = $(elem).offset().top;
	$('html,body').animate({
		scrollTop: target
	}, time || 400)
}
$('[href="#about"]').click(function () {
	scrollToElem("#about")
});
$('[href="#ingredients"]').click(function () {
	scrollToElem("#ingredients")
});
$('[href="#menu"]').click(function () {
	scrollToElem("#menu")
});
$('[href="#footer"]').click(function () {
	scrollToElem("#footer", 800)
});
$('[href="#reservation"]').click(function () {
	scrollToElem("#reservation", 800)
});
//=============mail====================
$("#form").submit(function () {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $("#form").serialize()
	}).done(function () {
		alert('Спасибо!')
	}).fail(function () {
		alert('Ошибка!')
	})
	// })
})

// ==================отключение wow.js на маленьком разрешении===============
$(window).resize(function () {
if ($(window).width() >= 650) {
		new WOW().init();
} else {
	var width = $(window).width()
	if ($(window).width() != width) {
		window.location.reload();
		width = $(window).width();}
}
})
