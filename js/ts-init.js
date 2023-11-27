const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	// initialSlide: 1,
	pagination: {
		// dots
		el: '.swiper-pagination',
	},
	navigation: {
		// arrows
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		600: {
			centeredSlides: true,
			initialSlide: 1,
		},
	},
});
