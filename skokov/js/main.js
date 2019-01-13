//============menu================
$("#header_button").click(function () {
	$('.header_nav ul').slideToggle();
});
//=============slider===========
$('.slide_button').click(function () {
	$('.slide_button').removeClass('active');
	$(this).addClass('active');
	var slideNumber = $(this).data('number');
	var itemWidth = $('.slider_item').outerWidth(true);
	$(".our_clients-slider").css({
		transform: 'translate(-' + slideNumber * (itemWidth * 3) + 'px)',
		transition: "all .4s ease"
	});
})
//==========slide to top========
$(window).scroll(function () {
	if ($(this).scrollTop() > 400) {
		$('.button-up').css('right', '10px');
	} else {
		$('.button-up').css('right', '-70px');
	}
});

$('.button-up').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 700)
})

//=== === === == animation servise & team=========
$(window).scroll(function () {
	var item = document.getElementById('team');
	var services = document.getElementById('services');
	var coordsItem = item.getBoundingClientRect().top;
	var coordsServices = services.getBoundingClientRect().top;
	if (coordsItem <= $(window).height() / 2 && coordsItem >= 0) {
		$('.team_item').css('transform', 'rotateY(0deg)')
	};
	if (coordsServices <= $(window).height() / 2 && coordsServices >= 0) {
		$('.services_item').css('transform', 'rotate(0deg)')
	}

});
$('.team_item').each(function (index) {
	$(this).css({
		'transition-delay': index / 10 + 's'
	});
})
$(".services_item").each(function (index) {
	$(this).css({
		'transition-delay': index / 10 + 's'
	});
});
//===========textillate=============
$(function () {
	$('.textillate').textillate({
		shuffle: true,
		sync: false
	});
});


//var waypoint = new Waypoint({
//	element: $(".s_services-h1"),
//	handler: function (direction) {
//		$('.s_services-h1').textillate({
//			shuffle: false,
//			sync: false
//		});
//	},
//	offset: $(window).height()
//});
//var waypoint = new Waypoint({
//	element: $(".s_aboutUs-h1"),
//	handler: function (direction) {
//		$('.s_aboutUs-h1').textillate({ in: {
//				shuffle: false,
//				effect: 'fadeInLeftBig'
//			}
//		});
//	},
//	offset: $(window).height()
//});
var waypoint = new Waypoint({
	element: $(".s_video-h1"),
	handler: function (direction) {
		$('.s_video-h1').textillate({ in: {
				effect: 'fadeInLeftBig',
				shuffle: true,
				delayScale: 1
			}
		});
	},
	offset: $(window).height()
});
var waypoint = new Waypoint({
	element: $(".news-desc"),
	handler: function (direction) {
		$('.news-desc').textillate({ in: {
				effect: 'bounceInRight',
				shuffle: true,
				delayScale: .1
			}
		});
	},
	offset: $(window).height()
})
//====scrollToElem=====================
function scrollToElem(elem, time) {
	var target = $(elem).offset().top;
	$('html,body').animate({
		scrollTop: target
	}, 400)
}
$('[href="#contact"]').click(function () {
	scrollToElem(".footer", 1000);
});
$('[href="#services"]').click(function () {
	scrollToElem(".s_services");
});
$('[href="#about-us"]').click(function () {
	scrollToElem(".s_aboutUs");
});
$('[href="#news"]').click(function () {
	scrollToElem("#news");
})

//===========my waypoint=============
function fnTextillate(el) {
	var elem = document.getElementById(el);
	var eff = elem.getAttribute('data-in-effect');
	var delay = elem.getAttribute('data-in-delay');
	$(elem).textillate({ in: {
			effect: eff || 'bounceInRight',
			shuffle: true,
			delayScale: delay || .2
		}
	});

}

function waypo(elem, fn, fnArg, offset) {
	var target = document.getElementById(elem);
	var targetCoord = target.getBoundingClientRect().top;
	if (targetCoord <= $(window).height() - (offset || 0) && targetCoord >= 0) {
		fnTextillate(fnArg);
	};
}
$(window).scroll(function () {
	waypo('s_services-h1', fnTextillate, 's_services-h1', 200);
	waypo("about-us", fnTextillate, "about-us", 200);
})

//===========================================
//var flag = true;
//$('[href="#services"]').click(function () {
//	if (!flag) {
//		return
//	};
//	$('body').css('animation', 'onload 1s ease');
//	flag = false;
//	setTimeout(function () {
//		scrollToElem(".s_services");
//	}, 500)
//	setTimeout(function () {
//		$('html,body').css('animation', 'none');
//		flag = true;
//	}, 1000);
//})
//
//
//$('[href="#about-us"]').click(function () {
//	if (!flag) {
//		return
//	};
//	$('body').css('animation', 'onload 1s ease');
//	flag = false;
//	setTimeout(function () {
//		scrollToElem(".s_aboutUs");
//	}, 500)
//	setTimeout(function () {
//		$('html,body').css('animation', 'none');
//		flag = true;
//	}, 1000);
//});
//
//
//$('[href="#contact"]').click(function () {
//	if (!flag) {
//		return
//	};
//	$('body').css('animation', 'onload 1s ease');
//	flag = false;
//	setTimeout(function () {
//		scrollToElem(".footer");
//	}, 500)
//	setTimeout(function () {
//		$('html,body').css('animation', 'none');
//		flag = true;
//	}, 1000);
//});
//$('[href="#"]').click(function () {
//	if (!flag) {
//		return
//	};
//	$('body').css('animation', 'onload 2s ease');
//	flag = false;
//	setTimeout(function () {
//		$('.news-link a').trigger('click');
//
//	}, 500)
//	setTimeout(function () {
//		$('html,body').css('animation', 'none');
//		flag = true;
//	}, 2000);
//});

//$('.button-up').click(function () {
//	if (!flag) {
//		return
//	}
//	$('body').css('animation', 'onload 1s ease');
//	flag = false;
//	setTimeout(function () {
//		$("html,body").scrollTop(0)
//	}, 500)
//	setTimeout(function () {
//		$('html,body').css('animation', 'none');
//		flag = true;
//	}, 1000);
//});
