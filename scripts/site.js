/* JS lerum */

$(document).ready(function(){

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

	$(function(){
	    $('.Index-page, .Index-gallery').each(function(n){
	        n+=1;
	        $(this).addClass('index'+ n++);
	    });
    });

	$(function(){		
		$(window).scroll(function(){
			var fader = $(window).scrollTop() / 1000;
    		$(".Index-gallery-item-content")
    				.css("opacity", 1 - fader)
    				.css("top", fader + fader);
 		 });
	});

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

	$(window).scroll(function() {
		var pHeight = $('.Header').height();

  		if ($(document).scrollTop() > pHeight) {
    		$('.Header').addClass('small');
  		} else {
    		$('.Header').removeClass('small');
  		}
	});

});


