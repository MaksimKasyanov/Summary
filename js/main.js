// !Scroll
let pageSlider = new Swiper('.page', {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	direction: "vertical",
	slidesPerView: 'auto',
	paralax: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	watchOverFlow: true,
	speed: 1200,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	navigation: {
		disabledClass: '.menu__link-disabled',
	},
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		draggable: true,
	},
	init: false,
	on: {
		init: function () {
			menuSlider();
		},
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
	}
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			})
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}
pageSlider.init();

// !Scroll lock
document.body.style.overflow = 'hidden';
$('.introduce__button').on('click', function () {
	document.body.style.overflow = 'visible';
});

// ! Анимация текста

let test1 = document.getElementById("letter-hover1");
test1.addEventListener("mouseenter", function (event) {
	event.target.style.textShadow = "1px 1px 12px transparent";
	event.target.style.color = "#21db7e";
	setTimeout(function () {
		event.target.style.color = "#000";
	}, 300);
}, false);
test1.addEventListener("mouseover", function (event) {
	event.target.style.textShadow = "1px 1px 12px #fff";
	event.target.style.color = "#21db7e";
	setTimeout(function () {
		event.target.style.textShadow = "1px 1px 12px transparent";
		event.target.style.color = "";
	}, 1000);
}, false);

let test2 = document.getElementById("letter-hover2");
test2.addEventListener("mouseenter", function (event) {
	event.target.style.color = "#ff5753";
	setTimeout(function () {
		event.target.style.color = "#000";
	}, 300);
}, false);
test2.addEventListener("mouseover", function (event) {
	event.target.style.color = "#ff5753";
	event.target.style.textShadow = "1px 1px 12px #fff";
	setTimeout(function () {
		event.target.style.color = "#000";
	}, 1000);
}, false);

// !Кнопка

$('.introduce__button').on('click', function () {
	$('.introduce__wrapper').toggleClass('introduce__wrapper_active');
	$('.bio').toggleClass('bio__active');
	$('.header').toggleClass('header__active');
	$('.introduce').toggleClass('introduce__active');
	$('.portfolio').toggleClass('portfolio__active');
	$('.about').toggleClass('about__active');
	setTimeout(function () {
		$('.introduce__wrapper').toggleClass('introduce__wrapper_none');
		$('.bio').toggleClass('bio__show');
		$('.header').toggleClass('header__show');
		$('.page__scroll').toggleClass('page__scroll_show');
		$('.introduce').toggleClass('introduce__delete');
	}, 1000);
});


$('.bio__info-btn').on('click', function () {
	$('.bio__info').toggleClass('bio__info_active');
	setTimeout(function () {
		$('.bio__skills-close').toggleClass('bio__skills-close_active');
		$('.bio__skills-mobile').toggleClass('bio__skills-mobile--show');
	}, 1000);
});

$('.bio__skills-close').on('click', function () {
	$('.bio__info').removeClass('bio__info_active');
	$('.bio__skills-close').removeClass('bio__skills-close_active');
	$('.bio__skills-mobile').toggleClass('bio__skills-mobile--show-close');
	setTimeout(function () {
		$('.bio__skills-mobile').removeClass('bio__skills-mobile--show');
		$('.bio__skills-mobile').toggleClass('bio__skills-mobile--show-close');

	}, 1000);

});

// ! Slider

new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 100,
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		},
		// when window width is >= 480px
		1000: {
		  slidesPerView: 2,
		},
		// when window width is >= 640px
	 },
});