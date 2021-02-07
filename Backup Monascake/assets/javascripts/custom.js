$(document).ready(function(){
	// javascript slider

	$('.owl-carousel.owl-theme').owlCarousel({
		margin:30,
		loop:true,
		autoWidth:true,
		items:1,
		autoHeight:true,
		stagePadding:1000,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});

	// gallery
	baguetteBox.run('.tz-gallery');

	// testimony
	$("#testimonial-slider").owlCarousel({
        items:4,
        loop:true,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});