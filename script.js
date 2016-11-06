$(document).ready(function() {

	$(window).on('scroll', function  () {
		if ($(window).scrollTop() >= $(window).height()){
			$('.head_col').css('margin-top', '0');			
		} else {
			$('.head_col').css('margin-top', '7vh');
		}
	})


	




	$('#owl').owlCarousel({
 		items: 1,
 		nav: true,
 		dots: true,
 		center: true,
 		dotsClass: 'my_dots',
 		dotClass: 'my_dot',
 		dotClass: 'my_dot active',
 		controlsClass:'my_controls',
		navContainerClass: 'container',
		navClass: ['left', 'right'],
 		loop: true,
 		navText:  ['<span class="fa fa-angle-left fa-2x controlHandle" ></span>','<span class="fa fa-angle-right fa-2x controlHandle" ></span>' ],
 		rewindNav: false,
 	});

 	/**/
 	$('#owl_projects').owlCarousel({
 		items: 1,
 		nav: true,
 		dots: false,
 		loop: true,
 		navText:  ['<span class="fa fa-angle-left fa-2x controlHandle_proj" ></span>','<span class="fa fa-angle-right fa-2x controlHandle_proj" ></span>' ],
 		rewindNav: false,
 		controlsClass:'my_proj_controls',
 		navContainerClass: 'container_proj',
		navClass: ['left_proj', 'right_proj'],
 	});

 	/**/
 	$('#owl_team').owlCarousel({
 		items: 1,
 		nav: true,
 		dots: false,
 		loop: true,
 		navText:  ['<span class="fa fa-angle-left fa-2x controlHandle_proj" ></span>','<span class="fa fa-angle-right fa-2x controlHandle_proj" ></span>' ],
 		rewindNav: false,
 		controlsClass:'my_team_controls',
 		navContainerClass: 'container_team',
		navClass: ['left_team', 'right_team'],
 	});


});