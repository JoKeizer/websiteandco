/**
*	website-co - Creative Portfolio Agency HTML Template
*	Version: 1.0
*	Author: bslthemes
*	Author URL: http://themeforest.net/user/bslthemes
*	Copyright © website-co by bslthemes. All Rights Reserved.
**/

( function( $ ) {
	'use strict';

	/*
		- Preloader
	*/

	$(window).on("load", function() {
		var preload = $('.preloader');
		
		if(!$('body').hasClass('preloader-hide')) {
			preload.find('.preloader__spinner').fadeOut(500);
			setTimeout(function(){
				preload.addClass('closed');
				$('body').addClass('animated--swiper--active');
			}, 500);
			setTimeout(function(){
				preload.addClass('loaded');
				$('body').addClass('animated--active');
			}, 1500);
		} else {
			$('body').addClass('animated--active');
			$('body').addClass('animated--swiper--active');
		}
	});

	/**
		Splitting
	**/
	Splitting({ by: 'lines' });
	ScrollOut({targets: '[data-website-co-scroll]', once: true});

	$('.word').wrap('<span></span>');
	$('[data-website-co-overlay]').append('<div class="website-co-overlay"></div>');

	/**
		Header Sticky
	**/
	if($('.website-co-header').length) {
	var new_scroll_position = 0;
	var last_scroll_position;
	$(window).on('scroll', function() {
		var header = $('.website-co-header');
		last_scroll_position = window.scrollY;

		// Scrolling down
		if (new_scroll_position < last_scroll_position && last_scroll_position > 50) {
			header.removeClass("slideDown");
			header.addClass("slideUp");
			header.addClass("sticky");
		}

		else if (last_scroll_position < 50) {
			header.removeClass("slideDown");
			header.removeClass("sticky");
		}

		else if (new_scroll_position > last_scroll_position) {
			header.removeClass("slideUp");
			header.addClass("slideDown");
			header.addClass("sticky");
		}

			new_scroll_position = last_scroll_position;
	});
	}

	/**
		Header Menu Button
	**/
	$('.website-co-menu-btn').on('click', function(){
		var obj = $(this);
		if(obj.hasClass('btn--active')) {
			$('body').removeClass('website-co--noscroll');
			$('.website-co-header').removeClass('header--active');
			obj.removeClass('btn--active');
			obj.addClass('website-co--notouch');
			obj.parent().find('.website-co-menu-popup').removeClass('menu--ready');
			obj.parent().find('.website-co-menu-container').addClass('website-co--noscroll');
			setTimeout(function(){
				obj.parent().find('.website-co-menu-popup').removeClass('menu--open');
			}, 300);
			setTimeout(function(){
				obj.removeClass('website-co--notouch');
				obj.parent().find('.website-co-menu-popup').removeClass('menu--visible');
			}, 1600);
		}
		else {
			$('body').addClass('website-co--noscroll');
			$('.website-co-header').addClass('header--active');
			obj.addClass('btn--active');
			obj.addClass('website-co--notouch');
			obj.parent().find('.website-co-menu-popup').addClass('menu--visible');
			obj.parent().find('.website-co-menu-popup').addClass('menu--open');
			setTimeout(function(){
				obj.removeClass('website-co--notouch');
				obj.parent().find('.website-co-menu-container').removeClass('website-co--noscroll');
				obj.parent().find('.website-co-menu-popup').addClass('menu--ready');
			}, 600);
		}
		return false;
	});

	/*
		Top Menu Close
	*/
	$('.website-co-menu').on('click', 'a', function(){
		if (!$(this).parent().hasClass('menu-item-has-children')){
			$('.website-co-header .website-co-menu-btn.btn--active').trigger('click');
		}
	});

	/*
		Header Menu Dropdown
	*/
	$('.website-co-menu').on('click', '.menu-item-has-children > .icon, .dropdown-link > a', function(){
		if($(this).closest('li').hasClass('opened')) {
			$(this).closest('li').removeClass('opened');
		} else {
			$(this).closest('ul').find('> li').removeClass('opened');
			$(this).closest('li').addClass('opened');
		}
		return false;
	});

	/*
		Footer Sticky
	*/
	if($('.footer--fixed').length) {
		var footer_fixed = $('.footer--fixed .website-co-footer').height();
		$('.wrapper').css({'margin-bottom':footer_fixed+'px'});
	}

	/*
		Intro Style
	*/
	if($('.website-co-intro.intro--black').length) {
		$('.website-co-header').addClass('header--white');
	}

	/*
		Pagepiling
	*/
	$('.js-hero-parallax').each(function() {
		var heroParallax = $(this);
		var heroParallax_loop = heroParallax.attr('data-loop');
		heroParallax.pagepiling({
			direction: 'vertical',
			scrollingSpeed: 700,
			easing: 'swing',
			normalScrollElementTouchThreshold: 5,
			touchSensitivity: 10,
			css3: true,
			loopTop: heroParallax_loop,
			loopBottom: heroParallax_loop,
			sectionSelector: '.website-co-hero-parallax-section',
			afterRender: function() {
				if (heroParallax.find('.website-co-hero-parallax-section.active').hasClass('section--dark')) {
					setDark();
				}
				$('#pp-nav').append('<div class="pp-nav-active"></div>');
				$("#pp-nav").appendTo(heroParallax);
				$('.js-hero-parallax-navs').on('click', '.js-hero-parallax-prev', function(){
					$.fn.pagepiling.moveSectionUp();
				});
				$('.js-hero-parallax-navs').on('click', '.js-hero-parallax-next', function(){
					$.fn.pagepiling.moveSectionDown();
				});
			},
			afterLoad: function (anchorLink, index) {
				var current = heroParallax.find('.website-co-hero-parallax-section.active');
				var current_pos = $('#pp-nav ul li a.active').position().top;
				$('.pp-nav-active').css({'top':current_pos+'px'});
				if (current.hasClass('section--dark')) {
					setDark();
				} else {
					removeDark();
				}
			}
		});
		heroParallax.find('.image').each(function() {
			var img_d = $(this).attr('data-dimg');
			var img_m = $(this).attr('data-mimg');
			if($(window).width() < 768) {
				if(img_m != 0) {
					$(this).css({'background-image' : 'url('+img_m+')'});
				}
				else {
					$(this).css({'background-image' : 'url('+img_d+')'});
				}
			} else {
				if(img_d != 0) {
					$(this).css({'background-image' : 'url('+img_d+')'});
				}
			}
		});
	});
	function setDark() {
		$('.website-co-page').addClass('parallax--dark');
		$('.website-co-header').removeClass('header--white');
		$('.website-co-hero-parallax .website-co-prev').removeClass('nav--white');
		$('.website-co-hero-parallax .website-co-next').removeClass('nav--white');
	}
	function removeDark() {
		$('.website-co-page').removeClass('parallax--dark');
		$('.website-co-header').addClass('header--white');
		$('.website-co-hero-parallax .website-co-prev').addClass('nav--white');
		$('.website-co-hero-parallax .website-co-next').addClass('nav--white');
	}

	/*
		- Hero Slider
	*/
	$('.js-hero-slider').each(function() {
		var heroMainSwiper = $(this);
		var heroMainSwiper_auto_val = heroMainSwiper.data('autoplay');
		var heroMainSwiper_loop = heroMainSwiper.data('loop');
		if (heroMainSwiper_auto_val > 1) {
			var heroMainSwiper_auto = true;
			heroMainSwiper.find('.swiper-slide').attr('data-swiper-autoplay', heroMainSwiper_auto_val);
		} else {
			var heroMainSwiper_auto = false;
		}
		if (heroMainSwiper_loop == true) {
			heroMainSwiper_loop = true;
		} else {
			heroMainSwiper_loop = false;
		}
		heroMainSwiper.find('.website-co-paginations-container').append('<div class="swiper-nav-active"></div>');
		var mainSliderSelector = new Swiper(heroMainSwiper, {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: heroMainSwiper_loop,
			speed: 1200,
			parallax: true,
			autoplay: heroMainSwiper_auto,
			grabCursor: false,
			watchSlidesProgress: true,
			pagination: {
				el: '.js-hero-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.js-hero-slider-next',
				prevEl: '.js-hero-slider-prev',
			},
			on: {
				progress: function(){
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						var slideProgress = swiper.slides[i].progress, innerOffset = swiper.width * 0.5, innerTranslate = slideProgress * innerOffset;
						swiper.slides[i].querySelector('.image').style.transform = "translateX(" + innerTranslate + "px)";
					}
				},
				touchStart: function() {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = "";
					}
				},
				setTransition: function(speed) {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = speed + "ms";
						swiper.slides[i].querySelector('.image').style.transition = speed + "ms";
					}
				},
				slideChange: function() {
					var current_pos = heroMainSwiper.find('.swiper-pagination-bullet-active').position().left;
					heroMainSwiper.find('.swiper-nav-active').css({'left':current_pos+'px'});
				}
			}
		});
		heroMainSwiper.find('.image:not(.video)').each(function() {
			var img_d = $(this).attr('data-dimg');
			var img_m = $(this).attr('data-mimg');
			if($(window).width() < 768) {
				if(img_m != 0) {
					$(this).css({'background-image' : 'url('+img_m+')'});
				}
				else {
					$(this).css({'background-image' : 'url('+img_d+')'});
				}
			} else {
				if(img_d != 0) {
					$(this).css({'background-image' : 'url('+img_d+')'});
				}
			}
		});
	});

	/*
		- Hero Carousel
	*/
	$('.js-hero-carousel').each(function() {
		var heroSwiper = $(this);
		var heroSwiper_mouse_val = heroSwiper.data('mousewheel');
		var heroSwiper_auto_val = heroSwiper.data('autoplay');
		var heroSwiper_loop = heroSwiper.data('loop');
		if (heroSwiper_auto_val > 1) {
			var heroSwiper_auto = true;
			heroSwiper.find('.swiper-slide').attr('data-swiper-autoplay', heroSwiper_auto_val);
		} else {
			var heroSwiper_auto = false;
		}
		if (heroSwiper_loop == true) {
			heroSwiper_loop = true;
		} else {
			heroSwiper_loop = false;
		}
		var heroCarousel = new Swiper('.js-hero-carousel', {
			slidesPerView: 'auto',
			rewind: true,
			noSwipingSelector: 'a',
			preventInteractionOnTransition: true,
			loop: heroSwiper_loop,
			mousewheel: heroSwiper_mouse_val,
			autoplay: heroSwiper_auto,
			spaceBetween: 20,
			pagination: false,
			navigation: {
				nextEl: '.js-hero-carousel-next',
				prevEl: '.js-hero-carousel-prev',
			}
		});
	});

	/*
		- Blog Carousel
	*/
	$('.js-blog-carousel').each(function() {
		var blogSwiper = $(this);
		var blogSwiper_auto_val = blogSwiper.data('autoplay');
		var blogSwiper_loop = blogSwiper.data('loop');
		if (blogSwiper_auto_val > 1) {
			var blogSwiper_auto = true;
			blogSwiper.find('.swiper-slide').attr('data-swiper-autoplay', blogSwiper_auto_val);
		} else {
			var blogSwiper_auto = false;
		}
		if (blogSwiper_loop == true) {
			blogSwiper_loop = true;
		} else {
			blogSwiper_loop = false;
		}
		blogSwiper.parent().find('.website-co-paginations-container').append('<div class="swiper-nav-active"></div>');
		var blogCarousel = new Swiper(blogSwiper, {
			slidesPerView: '2',
			noSwipingSelector: 'a',
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			loop: blogSwiper_loop,
			autoplay: blogSwiper_auto,
			spaceBetween: 20,
			pagination: {
				el: '.js-blog-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.js-blog-carousel-next',
				prevEl: '.js-blog-carousel-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2,
				}
			},
			on: {
				slideChange: function() {
					var current_pos = blogSwiper.parent().find('.swiper-pagination-bullet-active').position().left;
					blogSwiper.parent().find('.swiper-nav-active').css({'left':current_pos+'px'});
				}
			}
		});
	});

	/*
		- Ticker Carousel
	*/
	var tickerSwiper_speed = $('.js-ticker-slider').data('autoplay');
	var tickerSwiper = new Swiper('.js-ticker-slider', {
		spaceBetween: 30,
		centeredSlides: true,
		speed: tickerSwiper_speed,
		autoplay: {
			delay: 0,
		},
		loop: true,
		slidesPerView:'auto',
		allowTouchMove: false,
		disableOnInteraction: true
	});

	/*
		- Reviews Carousel
	*/
	$('.js-reviews-carousel').each(function() {
		var reviewSwiper = $(this);
		var reviewSwiper_auto_val = reviewSwiper.data('autoplay');
		var reviewSwiper_loop = reviewSwiper.data('loop');
		if (reviewSwiper_auto_val > 1) {
			var reviewSwiper_auto = true;
			reviewSwiper.find('.swiper-slide').attr('data-swiper-autoplay', reviewSwiper_auto_val);
		} else {
			var reviewSwiper_auto = false;
		}
		if (reviewSwiper_loop == true) {
			reviewSwiper_loop = true;
		} else {
			reviewSwiper_loop = false;
		}
		var reviewCarousel = new Swiper(reviewSwiper, {
			slidesPerView: 1,
			effect: 'fade',
			loop: reviewSwiper_loop,
			autoplay: reviewSwiper_auto,
			spaceBetween: 50,
			pagination: false,
			navigation: {
				nextEl: '.js-reviews-carousel-next',
				prevEl: '.js-reviews-carousel-prev',
			}
		});
	});

	/*
		- History Carousel
	*/
	$('.js-history-slider').each(function() {
		var hisSwiper = $(this);
		var hisSwiper_auto_val = hisSwiper.data('autoplay');
		if (hisSwiper_auto_val > 1) {
			var hisSwiper_auto = true;
			hisSwiper.find('.swiper-slide').attr('data-swiper-autoplay', hisSwiper_auto_val);
		} else {
			var hisSwiper_auto = false;
		}
		hisSwiper.find('.website-co-paginations-container').append('<div class="swiper-nav-active"></div>');
		var hisCarousel = new Swiper(hisSwiper, {
			slidesPerView: 1,
			noSwipingSelector: 'a',
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			loop: false,
			autoplay: hisSwiper_auto,
			spaceBetween: 20,
			pagination: {
				el: '.js-history-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.js-history-next',
				prevEl: '.js-history-prev',
			},
			on: {
				slideChange: function() {
					var current_pos = hisSwiper.find('.swiper-pagination-bullet-active').position().left;
					hisSwiper.find('.swiper-nav-active').css({'left':current_pos+'px'});
				}
			}
		});
		hisSwiper.find('.js-history-pagination .swiper-pagination-bullet').each(function() {
			var hisSwiper_index = $(this).index() + 1;
			var hisSwiper_date = hisSwiper.find('.swiper-slide:nth-child('+ hisSwiper_index +') .subtitle').text();
			$(this).append('<span>'+hisSwiper_date+'</span>');
		});
	});

	/*
		- Hero Video Mute/Unmute
	*/
	$('.website-co-play-btn').on( 'click', function (){
		if( $(this).parent().parent().find('video').prop('muted') ) {
			$(this).parent().parent().find('video').prop('muted', false);
			$(this).addClass('active');
		} else {
			$(this).parent().parent().find('video').prop('muted', true);
			$(this).removeClass('active');
		}

		return false;
	});

	/*
		- Services Hover
	*/
	$('.website-co-service-grid-item.active--default').each(function() {
		$(this).closest('.website-co-services-grid-fw').hover(function(){
			if ($(this).find('.website-co-service-grid-item').hasClass('active--default')) {
				$(this).find('.website-co-service-grid-item').removeClass('active');
			}
	  },function(){
			if ($(this).find('.website-co-service-grid-item').hasClass('active--default')) {
				$(this).find('.website-co-service-grid-item.active--default').addClass('active');
			}
	  });
	});

	/*
		- Number Text
	*/
	$('.website-co-circle-text .label').each(function() {
		$(this).html($(this).text().split('').map((char, i) => `<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`).join(''));
	});

	/*
		- Portfolio Showcase Hover
	*/
	if ($('.website-co-showcase-items').length) {
		$('.website-co-showcase-items').find('.website-co-showcase-item:first-child').addClass('hover');
	}
	$('.website-co-showcase-item').mouseenter(function(){
		var obj = $(this);
		obj.closest('.website-co-showcase-items').find('.website-co-showcase-item').removeClass('hover');
		obj.addClass('hover');
	});

	/*
		- Services Showcase Hover
	*/
	if ($(window).width() > 767) {
		if ($('.website-co-services-showcase').length) {
			$('.website-co-services-showcase').find('.items ul li:first-child').addClass('hover');
		}
		$('.website-co-services-showcase .items ul li .title').mouseenter(function(){
			var obj = $(this).closest('li');
			obj.closest('ul').find('li').removeClass('hover');
			obj.addClass('hover');
		});
	}

	/**
		- Video
	**/
	$('.website-co-video').on('click', '.play, .image', function(){
		$(this).closest('.website-co-video').addClass('active');
		var iframe = $(this).closest('.website-co-video').find('.js-video-iframe');
		largeVideoPlay(iframe);
		return false;
	});
	function largeVideoPlay( iframe ) {
		var src = iframe.data('src');
		iframe.attr('src', src);
	}

	/**
		- Counter
	**/
	$('.website-co-counter').each(function() {
		var numbers = $(this).find('.js-counter');
		var animationIsDone = false;
		var scroll = $(window).scrollTop() + $(window).height();
		var offset = $(this).offset().top;

		if (!animationIsDone && scroll >= offset) {
			animateNumbers();
		}

		$(window).on('scroll', function() {
			scroll = $(window).scrollTop() + $(window).height();

			if (!animationIsDone && scroll >= offset) {
				animateNumbers();
			}
		});
		function animateNumbers() {
			numbers.each(function() {
				var endValue = parseInt($(this).attr('data-end-value'), 10);

				$(this).easy_number_animate({
					start_value: 0,
					end_value: endValue,
					duration: 2500
				});

			});

			animationIsDone = true;
		}
	});

	/*
		- website-co Button
	*/
	$('button.website-co-btn.website-co-hover-btn').each(function() {
		var btn_text = $(this).text();
		$(this).html('<span>'+btn_text+'</span>');
	});

	/*
		- website-co Pagination
	*/
	$('.pager').each(function() {
		var btn_next = $(this).find('.next');
		var btn_prev = $(this).find('.prev');
		btn_next.html('<i></i>');
		btn_prev.html('<i></i>');
		btn_next.addClass('website-co-next website-co-hover-2');
		btn_prev.addClass('website-co-prev website-co-hover-2');
	});

	/*
		- website-co Portfolio
	*/
	var $container = $('.website-co-portfolio-items');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.website-co-portfolio-col',
			percentPosition: true,
		});
	});

	/*
		- website-co Filter
	*/
	$('.website-co-filter-nav-active').each(function() {
		$(this).css({'width':$(this).closest('.website-co-filter.filter--default').find('.item--active').parent().width()+6+'px'});
	});
	$('.website-co-filter').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
		$(filterValue).find('.image').attr('data-scroll','in');
		$(filterValue).find('.splitting').attr('data-scroll','in');

		$('.website-co-filter button').removeClass('item--active');
		$(this).addClass('item--active');

		var current_pos = $(this).closest('.website-co-filter.filter--default').find('.item--active').parent().position().left;
		var current_width = $(this).closest('.website-co-filter.filter--default').find('.item--active').parent().width();
		$(this).closest('.website-co-filter.filter--default').find('.website-co-filter-nav-active').css({'width':current_width+6+'px'});
		$(this).closest('.website-co-filter.filter--default').find('.website-co-filter-nav-active').css({'left':current_pos-3+'px'});
	});

	/**
		Collapse
	**/
	$('.website-co-collapse-item').on('click', '.website-co-collapse-btn', function(){
		if($(this).closest('.website-co-collapse-item').hasClass('opened')) {
			$(this).closest('.website-co-collapse-item').removeClass('opened');
			$(this).removeClass('active');
			$(this).next().slideUp();
		}
		else {
			$(this).closest('.website-co-collapse-item').addClass('opened');
			$(this).addClass('active');
			$(this).next().slideDown();
		}
	});

	/**
		Image Popup
	**/
	$('.mfp-image').magnificPopup();

	/**
		Validate Form
	**/
	if($('.cform').length) {
		$('#cform').validate({
			rules: {
				name: {
					required: true
				},
				tel: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			},
			success: 'valid',
			submitHandler: function() {
				$.ajax({
					url: 'mailer/feedback.php',
					type: 'post',
					dataType: 'json',
					data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&tel='+ $("#cform").find('input[name="tel"]').val() + '&message='+ $("#cform").find('textarea[name="message"]').val(),
					beforeSend: function() {
	
					},
					complete: function() {
	
					},
					success: function(data) {
						$('#cform').fadeOut();
						$('.alert-success').delay(1000).fadeIn();
					}
				});
			}
		});
	}

} )( jQuery );
