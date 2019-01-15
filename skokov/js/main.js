'use strict'
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
});
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
//=== === === == animation servise & team=========
//===================================================

$(window).scroll(function () {
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

			(function (offset) {
				var target = $('.team_item').offset().top - offset;
				if ($(window).scrollTop()>= target) {
					$('.team_item').css('transform', 'rotateY(0deg)')
				}

			}(400));

	(function (offset) {
				var target = $('.services_item').offset().top - offset;
				if ($(window).scrollTop()>= target) {
					$('.services_item').css('transform', 'rotateY(0deg)')
				}

			}(400));
//
			});
		//===========textillate=============
		$(function () {
			$('.textillate').textillate({
				shuffle: true,
				sync: false
			});
		});
		var waypoint = new Waypoint({
			element: $(".s_video-h1"),
			handler: function (direction) {
				$('.s_video-h1').textillate({ in: {
						effect: 'fadeInLeftBig',
						shuffle: true,
						delayScale: 1.5
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

		//===========my waypoint & textillate=============
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
			waypo('s_services-h1', fnTextillate, 's_services-h1', 100);
			waypo("about-us", fnTextillate, "about-us", 100);
		})
		//===================================
		$(window).resize(function () {

			if ($(window).width() >= 650) {
				new WOW().init();
			} else {
				window.location.reload()
			};
		})
