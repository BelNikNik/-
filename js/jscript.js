"use strict";

let cardSlider = new Swiper('.card-slider', {
	slidesPerView: 1,
	direction: 'vertical',
	mousewheel: true,
	navigation: {
		nextEl: ".card-slider__next",
		prevEl: ".card-slider__prev"
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
});