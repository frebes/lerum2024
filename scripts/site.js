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


	// Find middle point height imgwrapper

	$(function(){

		var heightElem = $('#freistande-oppskrifter .img-wrapper'),
			setHeightElem = $('#freistande-oppskrifter .summary-title');

		heightElem.each(function(){
			setHeightElem.css('top', ($(this).height)/2 + 'px');
		});

	});


	// Frontgallery mouseevent

	testHover = function(){

		var textElem = $('#freistande-oppskrifter .summary-title'),
			hoverElem = $('#freistande-oppskrifter .summary-item');

  		if ($(window).width() > 641){
			textElem.hide();
			hoverElem.hover(function(){
				$(this).next().find('.summary-title').fadeIn(200);

			}, function(){
				if ($('.summary-title:hover').length != 0){
					textElem.stop(true, false);
					return false;
				};
				$('.summary-title').fadeOut(100);
			});
		}

	};

	
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


  	callElemTh = function(){

  		if ($(window).width() > 641){
			textElem.hide();
			hoverElem.hover(function(){
				$(this).next().find('.summary-title').fadeIn(200);

			}, function(){
				if ($('.summary-title:hover').length != 0){
					textElem.stop(true, false);
					return false;
				};
				$('.summary-title').fadeOut(100);
			});
		}

  	};

  	// BC

  	$(function(){

  		var bc = $('.bc a'),
  			bc_produkt = $('div[class*="produkt"]'),
  			bc_prod_sylt = $('div[class*="sylt"]'),
  			bc_prod_saft = $('div[class*="saf"]'),
  			bc_prod_jus = $('div[class*="jus"]'),
    		bc_prod_jule = $('div[class*="jule"]'),

  			bc_fruktber = $('div[class*="frukt-ber"]'),
  			bc_oppskrift = $('.Site[class*="oppskrifter"]'),
  			bc_berekraft = $('.Site.berekraft'),
  			bc_omoss = $('.Site.om-lerum'),
  			bc_kontakt = $('.Site.kontakt-oss-innhold');
 
 		var parts = location.href.split('/').slice(3),
 			breadcrumb = parts.join('/');
 			
		parts[0] = '<a href="/">';

  		if (bc_produkt[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/produkt/">Produkt</a>');
  		if (bc_prod_sylt[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/produkt-syltetoy/">Syltetøy</a>');
    	if (bc_prod_saft[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/produkt-saft/">Saft</a>');
    	if (bc_prod_jus[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/produkt-jus-og-nektar/">Juice</a>');
    	if (bc_prod_jule[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/produkt-julebrus/">Julebrus</a>');

  		if (bc_fruktber[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/frukt-ber/">Frukt&bær</a>');
  		else if (bc_oppskrift[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/oppskrifter/">Oppskrifter</a>');
  		else if (bc_berekraft[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/berekraft/">Bærekraft</a>');
    	else if (bc_omoss[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/omoss/">Om oss</a>');
      	else if (bc_kontakt[0])
  			bc.append('&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/kontakt/">Kontakt oss</a>');

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



