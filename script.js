$(document).ready(function() {

// ........slidbar-OwlCarousel...........................
	$('#slider').owlCarousel({
	    autoplay: true,
	    smartSpeed: 400,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: true,
	    navElement: 'div',
	    navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});
 // ...........About-me js....................
	$('.about-img').magnificPopup({
		type:'image',
		delegate:'.about-icon',
		closeOnContentClick: true,
		closeBtnInside: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		 zoom: {
		   enabled: true,
		   duration: 300,
		   easing: 'ease-in-out'
		 }
	});

	// ........clint-OwlCarousel...........................
	$('#slider-client').owlCarousel({
	    autoplay: true,
	    smartSpeed: 900,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: false,
	    dots: true,
	    navElement: 'div',
	    navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});

	// ........our-works...........................
	$('.our-inner').magnificPopup({
		delegate:'.img-class',
	    type: 'image',
	    closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom',
	    gallery:{
	    	enabled:true
	  },
	  zoom:{
	      enabled: true,
	      duration: 300, 
	      easing: 'linear',
      }

	});













 // Stikcy Header
    var topbar = $('#topbar');
    // var slidebar = $('#slidebar');
    if($('#topbar').length) {
        var headerHeight = topbar.outerHeight();
        var stickyHeaderTop = topbar.offset().top;
        topbar.css({"top":stickyHeaderTop});
        //slidebar.css({"margin-top":headerHeight});
        var stickyHeader = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyHeaderTop) {
                topbar.addClass('header-sticky');
        		topbar.css({"top":"0px"});
            } else {
                if (topbar.hasClass('header-sticky')) {
                    topbar.removeClass('header-sticky');
        			topbar.css({"top":stickyHeaderTop});
                }
            }
        };
        stickyHeader();
        $(window).scroll(function () {
            stickyHeader();
        });
    }
    //.......... preloader..........................................
     $(window).on("load", function() {
	 $(".preloader").fadeOut();
	 });

// .................basic.................
// $('.button').on('click'function() {
// 	$('.button') .addClass('Date')

// });





});