$(function () {
	// fixed header
	let header = $('.header');
	let top = $('.top');
	let topH = top.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize', function() {
		topH = top.innerHeight();
		scrollPos = $(this).scrollTop();

		if(scrollPos > topH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});

	// checked menu-link
	$('.header__menu-link').on('click', function(e) {
		e.preventDefault();
		link = e.target
		$('.header__menu-item').removeClass('active');
		$(this).parent().addClass('active');
	});

	// menu open/close
	$('.header__burger').on('click', function(e) {
		e.preventDefault();
		$('.header__menu').toggleClass('open');
	});
	$('.link').on('click', function(e) {
		e.preventDefault();
		$('.header__menu').removeClass('open');
	});
	// close click outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.header').length) {
          $('.header__menu').removeClass('open');
        }
        e.stopPropagation();
    });

})

// dropdowns
document.querySelectorAll('.top__dropdown').forEach(function (selectWrapper) {
	const openBtn = selectWrapper.querySelector('.top__dropdown-btn');
	const openList = selectWrapper.querySelector('.top__dropdown-list');
	const openItems = openList.querySelectorAll('.top__dropdown-item');
	const hiddenInput = selectWrapper.querySelector('.top__hidden-input');

	// select list open
	openBtn.addEventListener('click', function () {
		openList.classList.toggle('open');
	});
	// select lict close
	openItems.forEach(function (listItem) {
		listItem.addEventListener('click', function () {
			openBtn.innerText = this.innerText;
			openList.classList.remove('open');
			hiddenInput.value = this.dataset.value;
		});
	});
	// select list close outside
	document.addEventListener('click', function (e) {
		if (e.target != openBtn) {
			openList.classList.remove('open');
		}
	});
});

// smooth scroll
const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
			const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
			const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: scrollToBlockValue - 20,
				behavior: 'smooth'
			})
			e.preventDefault();
			document.querySelector('.header__menu').classList.remove('open');
		}
	}
}
