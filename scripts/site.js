
/* JS lerum */

$(document).ready(function(){


	// Find pagenames and identify using classes

	$(function(){

	  	var pName = window.location.pathname,url = pName,		
			isLastSlash = (url[url.length -1]=="/")? true: false,
			url = url.split("/"),
			fName = url[url.length - (isLastSlash? 2: 1)];

	  	//alert(fName);
	  	console.log(pName);
	  	console.log(fName);

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
		console.log(galleryblock);
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

		currItem.height(setMaxHeight); // summary-item
		
		var breakPoint = 1000,
			heightElem = $('#freistande-oppskrifter .summary-thumbnail-outer-container'), // Find middle point height thumbwrapper forside
			setHeightElem = $('#freistande-oppskrifter .summary-title');

		console.log(heightElem);
		console.log(setHeightElem);
		if ($(window).width() > breakPoint){
			heightElem.each(function(){
				setHeight = $(this).height()/1.5; // consider padding bottom
				setHeightElem.css('bottom', setHeight + 'px');
			});
		}

	});


    // Element heights summary content

    $(function(){

        var setMaxHeight = 0,
          	currItem = $(".historie .summary-content");
      
      	currItem.each(function(){

        if($(this).height() > setMaxHeight){ 
            setMaxHeight = $(this).height(); 
            };
        });

      	currItem.height(setMaxHeight);

    });


	// Gallery mouseevent

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

    		fadeelement.css("opacity", 1-fader)
    				   .css("top", $(window).scrollTop()/10); // scroll content
 		 });

	});


	// Oppskrift show content oppskrift

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

		var tipContent = $('#oppskrift-data .tipscontent'); // Tip content

		if (tipContent.is(':empty'))
			$('#tips-content').css('display','none');
	});


	// Replace product class

	$(function(){

		$('#productFind').each(function() {
    		var repClass = $(this).attr('class');

    		$(this).attr('class', repClass.replace(/,/g, ' '));
		});

	});


	// Replace summary info oppskrift

	$(function(){

		var summaryInfo = $('#oppskrift-toppgalleri .summary-title a');

		summaryInfo.each(function(index, el){
			var sumLink = $(this).attr('href'),
				summaryRep = $($('#oppskrift-toppgalleri .summary-excerpt p')[index]);

			console.log(sumLink);
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

  	// BC (temp until better breadcrumb solution found)

  	$(function(){

  		var bc = $('.bc a'),

  			bc_produkt = $('.Site[class*="produkt"]'),
  			bc_prod_sylt = $('div[class*="syltetoy"]'),
  			bc_prod_saft = $('div[class*="saft"]'),
  			bc_prod_jus = $('div[class*="jus"]'),
    		bc_prod_jule = $('div[class*="jule"]'),

  			bc_oppskrift = $('div[class*="oppskrift"]'),

  			bc_fruktber = $('.Site[class*="frukt-og-berekraft"]'),
  			bc_fruktbere = $('.Site[class*="frukt-og-ber"]'),
  			bc_sunnheit = $('.Site[class*="sunnheit-og-helse"]'),
  			bc_menneske = $('.Site[class*="menneske"]'),
    		bc_miljo = $('.Site[class*="milj"]'),

  			bc_omoss = $('.Site.om-lerum'),
  			bc_hist = $('.Site[class*="hist"]'),
  			bc_styre = $('.Site[class*="styre"]'),

  			bc_kontakt = $('.Site.kontakt-oss-innhold');
 
 		var parts = location.href.split('/').slice(3),
 			breadcrumb = parts.join('/'),
 			htmls = '&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;',
 			addBc = $.parseHTML(htmls);
 			
		parts[0] = '<a href="/">';

  		if (bc_produkt[0])
  			bc.append(htmls + '<a href="/produkt/">Produkt</a>');
  		if (bc_prod_sylt[0])
  			bc.append(htmls + '<a href="/produkt-syltetoy/">Syltetøy</a>');
    	if (bc_prod_saft[0])
  			bc.append(htmls + '<a href="/produkt-saft/">Saft</a>');
    	if (bc_prod_jus[0])
  			bc.append(htmls + '<a href="/produkt-jus-og-nektar/">Juice</a>');
    	if (bc_prod_jule[0])
  			bc.append(htmls + '<a href="/produkt-julebrus/">Juleprodukter</a>');

  		if (bc_oppskrift[0])
  			bc.append(htmls + '<a href="/oppskrifter/">Oppskrifter</a>');

  		if (bc_fruktber[0])
  			bc.append(htmls + '<a href="/frukt-og-berekraft/">Frukt & bærekraft</a>');
  		else if (bc_fruktbere[0])
  			bc.append(htmls + '<a href="/frukt-og-berekraft/">Frukt & bærekraft</a>' + htmls + '<a href="/frukt-og-ber/">Frukt & bær</a>');
  		else if (bc_sunnheit[0])
  			bc.append(htmls + '<a href="/frukt-og-berekraft/">Frukt & bærekraft</a>' + htmls + '<a href="/sunnheit-og-helse/">Sunnheit & helse</a>');
  		else if (bc_menneske[0])
  			bc.append(htmls + '<a href="/frukt-og-berekraft/">Frukt & bærekraft</a>' + htmls + '<a href="/menneske/">Menneske</a>');
  		else if (bc_miljo[0])
  			bc.append(htmls + '<a href="/frukt-og-berekraft/">Frukt & bærekraft</a>' + htmls + '<a href="/milj/">Miljø</a>');


    	if (bc_omoss[0])
  			bc.append(htmls + '<a href="/om-lerum/">Om oss</a>');
      	else if (bc_hist[0])
  			bc.append(htmls + '<a href="/om-lerum/">Om oss</a>' + htmls + '<a href="/historie/">Historie</a>');
      	else if (bc_styre[0])
  			bc.append(htmls + '<a href="/om-lerum/">Om oss</a>' + htmls + '<a href="/styre-og-leiing/">Styre og leiing</a>');

      	if (bc_kontakt[0])
  			bc.append(htmls + '<a href="/kontakt-oss-innhold/">Kontakt oss</a>');

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

var sitelanguage = "nynorsk";

