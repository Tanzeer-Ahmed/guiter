(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			 
	// for slider-area owl-carousel
		$('.slider-area').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause:true,
			autoplayTimeout:5000,
			animateOut: 'fadeOut',
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
	
	// for portfolio-area owl-carousel
		var owl = $('.project-details');
		owl.owlCarousel({
			items:1,
			loop:true,
			margin:10,
			smartSpeed: 650,
			animateOut: 'fadeOut',
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true
		});
		$('.play').on('click',function(){
			owl.trigger('play.owl.autoplay',[4000])
		})
		$('.stop').on('click',function(){
			owl.trigger('stop.owl.autoplay')
		})
			
			
		$('.portfolio2').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				smartSpeed: 650,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
			
	//author-testimonials owl-carousel		
		$('.author-testimonial').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
				nav:true,
				autoplay:true,
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				smartSpeed: 800,
				autoplayTimeout:5000,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
			
	//blog-area owl-carousel
			var owl = $('.single1');
			owl.owlCarousel({
				items:1,
				loop:true,
				margin:10,
				animateIn: 'zoomIn',
				animateOut: 'zoomOut',
				autoplay:true,
				autoplayTimeout:4000,
				autoplayHoverPause:true
			});
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[1000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})
	//for parallax background in contact-area
		
		$('.parallax-window').parallax({imageSrc: 'images/contact.jpg'});
		
	//for parallax background in testimonial-area
		
		$('.parallax').parallax({imageSrc: 'images/testimonial1.jpg'});
		
	// this is for counter-up
		$('.count').countTo();

    });
	
}(jQuery));	
		

	