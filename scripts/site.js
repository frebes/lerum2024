/* JS lerum */

$(document).ready(function(){

	// Equal heights on selected items

	$(window).bind("load",function(){ //refresh on load/resize
	    var setMaxHeight = 0,
	    	currItem = $(".summary-item");
		
		currItem.each(function(){
	   		if($(this).height() > setMaxHeight){ 
	          	setMaxHeight = $(this).height(); 
	            };
			});
		currItem.height(setMaxHeight);
	});

	// Function to fadeout selected elements

	$(function(){		
		$(window).scroll(function(){
			var fadeelement = $(".Index-gallery-item-content"),
				fader = $(window).scrollTop()/1000;
    		fadeelement.css("opacity", 1 - fader)
    				   .css("top", $(window).scrollTop()/10); // scroll content
 		 });
	});

	// Find pagenames and identify using classes
	// Rearrange DOM forside lerum

	$(function(){
	  	var pName = window.location.pathname,
	  	    fName = pName.slice(1,-1);

	  	if(fName === ''){ // Set first page lerum
	    	$('.Site').addClass('forside');
	  	}
	 	else{
	    	$('.Site').addClass(fName);
	  	}
		var galleryblock = $('.forside .Index-gallery-item-content');
		galleryblock.appendTo('.forside .Index-gallery');
	});

	// Replace summary info

	$(function(){
		var summaryInfo = $('.oppskrifter #oppskrift-toppgalleri .summary-item');

		summaryInfo.each(function(){
			var sumLink = $('.oppskrifter #oppskrift-toppgalleri .summary-title a').attr('href'),
				summaryRep = $('.oppskrifter #oppskrift-toppgalleri .summary-excerpt p');

			//alert(sumLink);
		    summaryRep.replaceWith('<p class="oppskrift-link"><a href="' + sumLink +'">Gå til oppskrifta</a></p>')
		});
	});

	// Scroll header function

	$(window).scroll(function() {
		var pHeight = $('.Header').height();

  		if ($(document).scrollTop() > pHeight) {
    		$('.Header').addClass('small');
  		} else {
    		$('.Header').removeClass('small');
  		}
	});

});


