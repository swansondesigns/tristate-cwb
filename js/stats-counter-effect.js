function animateStats() {
	gsap.from('stat-value', {
		textContent: 0,
		duration: 4,
		ease: 'power1.in',
		snap: { textContent: 1 },
		stagger: {
			each: 0.4,
			onUpdate: function () {
				this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
			},
		},
		scrollTrigger: {
			trigger: '.es-stats-container',
			start: 'top center',
		},
	});
}
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function initGSAPanimations() {
	gsap.registerPlugin(ScrollTrigger);
	animateStats();
}
window.addEventListener('load', initGSAPanimations);
