(function ($) {
	//Open social links in a new tab
	$( '.social-menu-widget li a' ).attr( 'target','_blank' );

	//Fit Vids
	$("body").fitVids();

	//Menu bar
	var headerHeight = $('.site-header').outerHeight();
	$('.copy').css('height',headerHeight);

	$(window).resize(function(){
		var headerHeight = $('.site-header').outerHeight();
		$('.copy').css('height',headerHeight);
	});

	//Menu bar
	var header = $('.site-header');
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 0 ) {
			header.addClass('header-scrolled');
		} else {
			header.removeClass('header-scrolled');
		}
	});

	//Header text effects

	var fadeStart = 100;
	var fadeUntil = 400;
	var fading = $('.header-info');

	$(window).bind('scroll', function(){
		var offset = $(document).scrollTop()
		var opacity = 0;
		if( offset <= fadeStart ){
				opacity = 1;
		} else if( offset <= fadeUntil ){
				opacity = 1-offset/fadeUntil;
		}
		fading.css('opacity',opacity);
	});

	//Multicolumn support

	var twoCols = $(".page-template-page_widgetized section.at-2-col");
	for(var i = 0; i < twoCols.length; i+=2) {
		twoCols.slice(i, i+2).wrapAll("<div class='multicolumn-row clearfix'></div>");
	}

	var threeCols = $(".page-template-page_widgetized section.at-3-col");
	for(var i = 0; i < threeCols.length; i+=3) {
		threeCols.slice(i, i+3).wrapAll("<div class='multicolumn-row clearfix'></div>");
	}

	//Mobile menu
	var	menuType = 'desktop';

	$(window).on('load resize', function() {
		var currMenuType = 'desktop';

		if ( matchMedia( 'only screen and (max-width: 1024px)' ).matches ) {
			currMenuType = 'mobile';
		}

		if ( currMenuType !== menuType ) {
			menuType = currMenuType;

			if ( currMenuType === 'mobile' ) {
				var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
				var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

				hasChildMenu.children('ul').hide();
				hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
				$('.btn-menu .fa').removeClass('active');
			} else {
				var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

				$desktopMenu.find('.submenu').removeAttr('style');
				$('.btn-submenu').remove();
			}
		}
	});

	$('.btn-menu').on('click', function() {
		$('#mainnav-mobi').slideToggle(300);
		$(this).toggleClass('active');
	});

	$(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
		$(this).toggleClass('active').next('ul').slideToggle(300);
		e.stopImmediatePropagation()
	});

	//Preloader

	var preloader = $('.preloader');
	preloader.addClass('preloader-hidden');
	setTimeout(function(){preloader.hide();}, 600);

	//Colors
	var elements = 'h1,h2:not(.widget-title),h3,h4,h5,h6,a,div,span';
	$('.page-template-page_widgetized section').each( function() {
		if ($(this).data('color') == 'inherit') {
			$(this).find(elements).css('color','inherit');
		}
	});

	var doc = document.documentElement.style;
	if ( !('flexWrap' in doc) && !('WebkitFlexWrap' in doc) && !('msFlexWrap' in doc) ) {

		function equalColumns() {
			var multicol = $( '.multicolumn-row' );
			if($(window).width() > 991) {
				multicol.each(function(index, element) {
					$(element).find('section').each(function() {
						var column = $('.multicolumn-row section');
						var maxHeight = Math.max.apply(null, column.map(function () {
							return $(this).outerHeight();
						}).get());
						$(this).outerHeight(maxHeight);
					});
				});
			} else {
				$( '.multicolumn-row section' ).css('height', '');
			}
		}
		function footerFix() {
			$('.footer-contact').addClass('footernoFlex');
		}

		$(document).ready(equalColumns);
		$(window).on('resize',equalColumns);
		$(document).ready(footerFix);

	}

	//Anchor scroll
	$('.main-navigation a[href^="#"], .button[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 100
		}, 900);
	});

	// Caption
	$('#entry-content').each(function(i) {
		$(this).find('img').each(function() {
			if ($(this).parent().prop('tagName') !== 'a') {
				$(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
			}
		});
	});
	breakpoints({
		xlarge: ['1200px', '1920px'],
		large: ['992px', '1199px'],
		medium: ['768px', '991px'],
		small: ['436px', '767px'],
		xsmall: [null, '480px']
	});

	var option = {
		selector: 'a.gallery-item',
		popupWidth: 150,
		popupHeight: 150,
		popupCloserText: '',
		popupLoaderText: '',
		usePopupNav: true,
		usePopupDefaultStyling: false,
		windowMargin: 50
	};

	breakpoints.on('<=small', function () {
		option.windowMargin = 0;
	});

	breakpoints.on('>small', function () {
		option.windowMargin = 50;
	});

	$('#entry-content').poptrox(option);

	//Scroll up
	var $viewport = $('html, body'),
		$topAnchor = $('#top-anchor');
	$(function() {
		$(window).scroll(function() {
			$(this).scrollTop() > $(this).height() ? $topAnchor.addClass('on') : $topAnchor.removeClass('on');
		});
		$topAnchor.click(function() {
			$viewport.animate({scrollTop: 0}, 600);
		});
		$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
			if(e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
				$viewport.stop();
			}
		});
	});
})(jQuery);
