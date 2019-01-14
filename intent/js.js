//===========tabs===================
//=========================================
$('.tabs-nav li').click(function (event) {
	var number = event.target.dataset.number;
	var tabs = document.getElementsByClassName('tabs-item');
	var nav = document.getElementsByClassName('li-navs');
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('tabs-active');
		nav[i].classList.remove('li-active');
	}
	tabs[number].classList.add('tabs-active');
	$(this).addClass('li-active');
})
//========================slider================
//==============================================
var contr = 0;
var prev = document.getElementsByClassName('preview-item');
var slide = document.getElementsByClassName('slider-item');
var imgWidth = parseInt($('.slider-item img').css('width'));
var mass = [];
for (var i = 0; i < slide.length; i++) {
	mass.push(slide[i].cloneNode(true));
	mass[i].classList.add('clone');
}
$('.slider-wrap').prepend(mass[mass.length - 1].cloneNode(true));
$('.slider-wrap').append(mass[0].cloneNode(true));
$('.slider-wrap').css({
	transform: 'translate(-' + imgWidth + 'px)'
})
var transf = -imgWidth;

function translate0() {
	$('.slider-wrap').css({
		transition: '0s',
		transform: 'translateX(0px)'
	})
}

function translateR() {
	setTimeout(function () {
		$('.slider-wrap').css({
			transform: 'translateX(' + transf + 'px)',
			transition: ".5s ease"
		}, 10)
	})
}
//=======================клик по правой============================
$('.arrows-right').on('click', function () {
	rightClick();
});

function rightClick() {
	contr++;
	//	console.log(contr);
	for (var i = 0; i < prev.length; i++) {
		prev[i].classList.remove('img-border');
	}
	if (contr >= 10) {
		contr = -1;
		translate0();
		transf = 0;
		transf -= imgWidth;
		contr++;
		translateR();
		prev[contr].classList.add('img-border');
		return;
	}
	transf -= imgWidth;

	$('.slider-wrap').css({
		transform: 'translateX(' + transf + 'px)',
		transition: ".5s ease"
	})

	prev[contr].classList.add('img-border');

}

//==============клик по левой======================
$('.arrows-left').on('click', leftClick)

function leftClick() {
	contr--;
	for (var i = 0; i < prev.length; i++) {
		prev[i].classList.remove('img-border');
	}
	if (contr < 0) {
		contr = 10;
		var translateValue = imgWidth * (mass.length + 1);
		$('.slider-wrap').css({
			transition: '0s',
			transform: 'translate(-' + translateValue + 'px)'
		})
		transf = -translateValue;
		transf += imgWidth;
		contr--;
		translateR();
		prev[contr].classList.add('img-border');
		return
	}
	transf += imgWidth;
	translateR();
	prev[contr].classList.add('img-border');
}
//==============клик по превьюхе==================
$('.preview-item').click(function (event) {
	var imgWidth = $('.slider-item img').css('width');
	for (var i = 0; i < prev.length; i++) {
		prev[i].classList.remove('img-border');
	}
	//		console.log(event)
	var num = event.target.dataset.num;
	//	console.log(num)
	var mw = num * parseInt(imgWidth);
	$('.slider-wrap').css({
		transform: 'translate(-' + mw + 'px)',
		transition: '.5s'
	})
	transf = -mw;
	contr = num - 1;
	prev[contr].classList.add('img-border');
})

//===============autoplay===========
var autoPlay = setInterval(rightClick, 4000);

$('.arrows-right,.arrows-left,.preview-item').on('click', function () {
	clearInterval(autoPlay);
	autoPlay = setInterval(rightClick, 4000)
})

//==============прокрутка мышью====================
$('.slider-wrap').on('wheel', function (event) {
	console.log(event)
	if (event.originalEvent.deltaY > 0) {
		//		console.log(event)
		$('.arrows-right').trigger('click');
		return false
	} else {
		$('.arrows-left').trigger('click');
		return false
	}

});
