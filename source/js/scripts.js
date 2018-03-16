//Menu dropdown animation
jQuery(function($) {
	$('.sub-menu').hide();
	$('.main-navigation .children').hide();

	if ( matchMedia( 'only screen and (min-width: 1024px)' ).matches ) {
		$('.menu-item').hover(
			function() {
				$(this).children('.sub-menu').fadeIn().addClass('submenu-visible');
			},
			function() {
				$(this).children('.sub-menu').fadeOut().removeClass('submenu-visible');
			}
		);
		$('.main-navigation li').hover(
			function() {
				$(this).children('.main-navigation .children').fadeIn().addClass('submenu-visible');
			},
			function() {
				$(this).children('.main-navigation .children').fadeOut().removeClass('submenu-visible');
			}
		);
	}
});

//Open social links in a new tab
jQuery(function($) {
     $( '.social-menu-widget li a' ).attr( 'target','_blank' );
});

//Fit Vids
jQuery(function($) {
    $("body").fitVids();
});

//Menu bar
jQuery(function($) {
    var headerHeight = $('.site-header').outerHeight();
    $('.header-clone').css('height',headerHeight);

	$(window).resize(function(){
		var headerHeight = $('.site-header').outerHeight();
		$('.header-clone').css('height',headerHeight);
	});
});

//Menu bar
jQuery(function($) {
	var header = $('.site-header');
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 0 ) {
			header.addClass('header-scrolled');
		} else {
			header.removeClass('header-scrolled');
		}
	});
});

//Header text effects
jQuery(function($) {

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

});

//Multicolumn support
jQuery(function($) {
	var twoCols = $(".page-template-page_widgetized section.at-2-col");
	for(var i = 0; i < twoCols.length; i+=2) {
	  twoCols.slice(i, i+2).wrapAll("<div class='multicolumn-row clearfix'></div>");
	}

	var threeCols = $(".page-template-page_widgetized section.at-3-col");
	for(var i = 0; i < threeCols.length; i+=3) {
	  threeCols.slice(i, i+3).wrapAll("<div class='multicolumn-row clearfix'></div>");
	}
});

//Mobile menu
jQuery(function($) {
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

		$('.btn-menu .fa').on('click', function() {
			$('#mainnav-mobi').slideToggle(300);
			$(this).toggleClass('active');
		});

		$(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
			$(this).toggleClass('active').next('ul').slideToggle(300);
			e.stopImmediatePropagation()
		});
});

//Preloader
jQuery(function($) {
	var preloader = $('.preloader');
	preloader.addClass('preloader-hidden');
	setTimeout(function(){preloader.hide();}, 600);
});

//Colors
jQuery(function($) {
	var elements = 'h1,h2:not(.widget-title),h3,h4,h5,h6,a,div,span';
	$('.page-template-page_widgetized section').each( function() {
		if ($(this).data('color') == 'inherit') {
			$(this).find(elements).css('color','inherit');
		}
	});
});

//Flex fallback
jQuery(function($) {
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
});

//Anchor scroll
jQuery(function($) {
	$('.main-navigation a[href^="#"], .button[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 100
	    }, 900);
	});
});

// Caption
jQuery(function($) {
    $('.entry-content').each(function(i) {
        $(this).find('img').each(function() {
            if ($(this).parent().prop("tagName") !== 'a') {
                $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
            }
        });
    });
    if (lightGallery) {
        var options = {
            selector: '.gallery-item',
        };
        $('.entry-content').each(function(i, entry) {
            lightGallery(entry, options);
        });
        lightGallery($('.article-gallery')[0], options);
    }
});

//Article toc
var toc = document.getElementById('toc');

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = toc.offsetTop - 100;

	function scrollcatelogHandler(e) {
		var event = e || window.event,
		    target = event.target || event.srcElement;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > tocPosition) {
		    toc.classList.add("toc-fixed");
		} else {
		    toc.classList.remove("toc-fixed");
		}
	}
}

//Scroll up
jQuery(function($) {
	var $viewport = $('html, body');
    window.onload = $(function() {
    	$(window).scroll(function() {
    		$(window).scrollTop() > $(window).height()*0.5 ? $('#scrollup').fadeIn(200) : $('#scrollup').fadeOut(100);
		});
        $('#scrollup').click(function() {
            $viewport.animate({scrollTop: 0}, 800);
         });
        $viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
            if(e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
                $viewport.stop();
            }
        });
    });
});

//Change Title
jQuery(function($){
	var t = document.title;
	window.onblur = function() {
		document.title = "I miss you (>__<)"
	},
	window.onfocus = function() {
		document.title = t
	}
});