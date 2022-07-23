// JavaScript Document
var $ = jQuery.noConflict();

jQuery(document).ready(function(){
     

  
   $(function() {
    $('.mobile-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.mobile-slider').slick('resize');
    });
});



 $(function() {
  $('.tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });
});


  $(".btn-group-right").clone().appendTo(".enumenu_ul");


  var siteHeaderHeight = $("header").outerHeight();

   $(".link_to_target").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
           scrollTop: $(target).offset().top 
        }, 1000);
    });

});

 
   
$(window).on("load", function () {
	//Prevent Page Reload on all # links
	$("a[href='#']").click(function (e) {
		e.preventDefault();
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing"))
			$("body").addClass("window-resizing");
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Page Scroll to top
	$(".page-scroll-to-top-link").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});


	// Banner Slider
	$(".banner-slider").slick({
		dots: false,
		arrows: true
	});

	// Four Item Slider
	$(".four-item-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 9999,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Four Item Slider Without Arrows
	$(".four-item-slider-without-arrow").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 9999,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Three Item Slider
	$(".three-item-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 9999,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Five Item Slider
	$(".five-item-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 9999,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Accordion 
	$(".accordion-heading").click(function (e) {
		e.preventDefault();
		var $this = $(this).closest(".accordion");
		if (!$this.hasClass("open")) {
			$this.siblings(".open").removeClass("open").find(".accordion-content").stop(true, true).slideUp();
			$this.addClass("open").find(".accordion-content").stop(true, true).slideDown();
		} else {
			$this.removeClass("open").find(".accordion-content").stop(true, true).slideUp();
		}
	});

	// Cookies Slider
	var $cookiesSlider = $(".cookies-slider");
	$cookiesSlider.slick({
		arrows: false
	});
	$(".cookies-slider-btn.prev-slide-btn").click(function(){
		$cookiesSlider.slick("slickPrev");
	});
	$(".cookies-slider-btn.next-slide-btn").click(function(){
		$cookiesSlider.slick("slickNext");
	});

	// Change Slider Number
	var $sliderNumber = $(".cookies-slider-number");
	$sliderNumber.each(function () {
		var $thisSliderNumber = $(this);
		var $sliderNumberSlider = $thisSliderNumber.closest(".cookies-bar").find(".slick-slider");
		function changeSliderNumber() {
			var $slideCount = $sliderNumberSlider.slick("getSlick").slideCount;
			var $currentSlide = $sliderNumberSlider.slick("getSlick").currentSlide + 1;
			$thisSliderNumber.text($currentSlide + '/' + $slideCount)
		}
		if ($sliderNumberSlider.length) {
			changeSliderNumber();
			$sliderNumberSlider.on("afterChange", function () {
				changeSliderNumber();
			});
		};
	});

	// Banner Block Inner Slider
	$(".banner-block-inner-slider").slick({
		arrows: false,
		dots: true,
	});

	// Add Class on Window Load
	$("body").addClass("page-loaded");
});










