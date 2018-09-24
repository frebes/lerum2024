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

	// Frontgallery mouseevent

	$(function(){
		var textElem = $('#freistande-oppskrifter .summary-title');

		textElem.hide();
		textElem.hover(function(){
			$(this).fadeIn(200).stop();
			
		});	
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
		var summaryInfo = $('#oppskrift-toppgalleri .summary-title a');

		summaryInfo.each(function(index, el){
			var sumLink = $(this).attr('href'),
				summaryRep = $($('#oppskrift-toppgalleri .summary-excerpt p')[index]);

		    summaryRep.replaceWith('<p class="oppskrift-link"><a href="'+ sumLink +'">Gå til oppskrifta</a></p>')
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

	// Oppskrift calc values

	$(function(){
		var value1 = $('#item1').val(),
			value2 = $('#item2').val(),
			value3 = $('#item3').val();

		$('#valAmount').keypress(function(e){
			var key = e.which;
			if(key == 13){ // enter	key	  
			    $('input[name = butAssignProd]').click();
			    calcOppskrift();
			    return false;  
			}
		}); 
	});

});


