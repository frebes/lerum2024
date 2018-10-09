/* JS lerum */

$(document).ready(function(){

	// Find pagenames and identify using classes

	$(function(){
	  	var pName = window.location.pathname,
	  	    fName = pName.slice(1,-1);

	  	if(fName === ''){ // Set first page lerum
	    	$('.Site').addClass('forside');
	  	}
	 	else{
	    	$('.Site').addClass(fName);
	  	}
	});


	// Rearrange DOM forside lerum
	
	$(function(){
		var galleryblock = $('.forside .Index-gallery-item-content');
		galleryblock.appendTo('.forside .Index-gallery');
	});

	
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
		var textElem = $('#freistande-oppskrifter .summary-title'),
			hoverElem = $('#freistande-oppskrifter .summary-thumbnail-outer-container');

		textElem.hide();
		hoverElem.hover(function(){
			$(this).next().find('.summary-title').fadeIn(200);

		}, function(){
			if ($('.summary-title:hover').length!= 0){
				//textElem.stop(true,true);
				return false;
			};
			$('.summary-title').fadeOut(100);
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


	// Oppskrift show content

	$(function(){
		var valElem = $('.oppskrift-customtop .data-grad'),
			valNum = parseInt(valElem.text());

		if (valNum == "1"){
			valElem.addClass('enk').text('Enkel');
		}
		else if (valNum == "2"){
			valElem.addClass('mid').text('Middels');
		}
		else if (valNum == "3"){
			valElem.addClass('van').text('Vanskelig');
		}
	});


	// Replace product class

	$(function(){
		$('#productFind').each(function() {
    		var repClass = $(this).attr('class');

    		$(this).attr('class', repClass.replace(/,/g, ' '));
		});
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


  	// Markdown

  	$(function(){
  		var mdblock = $('.markdown-block .sqs-block-content h2');

	  	mdblock.addClass('ui-closed').css('cursor','pointer');
	  	mdblock.nextUntil("h2").slideToggle();

	  	mdblock.click(function() {
	    	 $(this).nextUntil("h2").slideToggle();
	     	 $(this).toggleClass('ui-closed ui-open');
	  	});
  	});


  	// BC

  	$(function(){

		var url = location.pathname; // = location.href
		var parts = location.href.split('/').slice(3);
		parts[0] = 'Forside ';
		var breadcrumb = parts.join(' / ');
		$('.bc').html(breadcrumb);

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


}); // End dom ready


