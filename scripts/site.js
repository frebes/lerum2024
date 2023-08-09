
/* JS lerum */

$(document).ready(function(){


	// Find pagenames and identify using classes

	$(function(){

	  	var pName = window.location.pathname,url = pName,		
			isLastSlash = (url[url.length -1]=="/")? true: false,
			url = url.split("/"),
			fName = url[url.length - (isLastSlash? 2: 1)];

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
	    	currItem = $("");
		
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
				setHeight = $(this).height()/1.55; // consider padding bottom
				setHeightElem.css('bottom', setHeight + 'px');
			});
		}

	});


    // Element heights summary content

    $(function(){

        var setMaxHeight = 0,
          	currItem = $("");
      
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


	/*
	$(function(){

		var galInfo = $('#fokusomrade .sqs-gallery .slide a');

		galInfo.each(function(index, el){
			var galLink = $(this).attr('href'),
				galRep = $($('#fokusomrade .image-slide-title')[index]);

			//console.log(sumLink);
		    galRep.replaceWith('<a href="'+ galLink +'">bak</a>');
		});

	});*/

	

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
  			bc_prod_brus = $('div[class*="sprudlande"]'),
    		bc_prod_jule = $('div[class*="jule"]'),
    		bc_prod_smudi = $('div[class*="smudi"]'),

  			bc_oppskrift = $('.Site[class*="oppskrift"]'),
  			bc_oppskrift_det = $('div[class*="oppskrifter"]'),

  			bc_fruktber = $('.Site[class*="frukt-og-berkraft"]'),
  			bc_fruktbere = $('.Site[class*="frukt-og-ber"]'),
  			bc_sunnheit = $('.Site[class*="sunnheit-og-helse"]'),
  			bc_menneske = $('.Site[class*="menneske"]'),
    		bc_miljo = $('.Site[class*="miljoe"]'),

  			bc_omoss = $('.Site.om-lerum'),
  			bc_hist = $('.Site[class*="hist"]'),
  			bc_eigar = $('.Site[class*="eigar"]'),
  			bc_fabrikk = $('.Site[class*="fabrikk"]'),
  			bc_styre = $('.Site[class*="styre"]'),

  			bc_kontakt = $('.Site.kontakt-oss-'),
  			bc_omvis = $('.Site.omvisning'),
  			bc_oss = $('.Site.ofte-stilte-sprsml'),
  			bc_reklam = $('.Site.reklamasjon'),
  			bc_spons = $('.Site.sponsing');

				bc_datablad = $('.Site[class*="datablad"]');
 
 		var parts = location.href.split('/').slice(3),
 			breadcrumb = parts.join('/'),
 			htmls = '&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;',
 			addBc = $.parseHTML(htmls);
 			produrl = $(location).attr('pathname');
		
		produrl.indexOf(1); 
		produrl.toLowerCase();
		produrl = produrl.split("/")[1];

		// console.log(produrl);

  		if (bc_produkt[0])
  			bc.append(htmls + '<a href="/produkt/">Produkt</a>');

  		if (bc_prod_sylt[0] && produrl == 'syltetoy')
  			bc.append(htmls + '<a href="/produkt-syltetoy/">Syltetøy</a>');
  		
  		if (produrl == 'syltetoy')
  			bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/produkt-syltetoy/">Syltetøy</a>');

    	if (bc_prod_saft[0] && produrl == 'saft')
  			bc.append(htmls + '<a href="/produkt-saft/">Saft</a>');	

	  	if (produrl == 'saft')
	  		bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/produkt-saft/">Saft</a>');

    	if (bc_prod_jus[0])
  			bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/produkt-jus-og-nektar/">Juice</a>');
  
    	if (bc_prod_brus[0])
  			bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/produkt-brus/">Brus</a>');

    	if (bc_prod_jule[0])
  			bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/juleprodukt/">Juleprodukt</a>');

     	if (bc_prod_smudi[0])
  			bc.html('<a href="/">Forside</a>' + htmls + '<a href="/produkt/">Produkt</a>' + htmls + '<a href="/smudi/">Smudi</a>');

 		if (produrl == 'oppskrifter' || produrl == 'oppskrifter-')
 			bc.append(htmls + '<a href="/oppskrifter/">Oppskrifter</a>');

  		if (bc_fruktber[0] || bc_fruktbere[0] || bc_sunnheit[0] || bc_menneske[0] || bc_miljo[0])
  			bc.append(htmls + '<a href="/frukt-og-berkraft/">Frukt & bærkraft</a>');

    	if (bc_omoss[0] || bc_hist[0] || bc_eigar[0] || bc_fabrikk[0] || bc_styre[0])
  			bc.append(htmls + '<a href="/om-lerum/">Om oss</a>');

      	if (bc_kontakt[0] || bc_omvis[0] || bc_oss[0] || bc_reklam[0] || bc_spons[0])
  			bc.append(htmls + '<a href="/kontakt-oss-/">Kontakt oss</a>');

			if (bc_datablad[0]) {
				bc.append(htmls + '<a href="/datablad/">Datablad</a>');
			}

  	});

  	// Produktny temp fix limited function gallery

  	$(function(){

  		$('.produkt .slide:first-child .image-slide-title').html('<a href="/smudi">Smudi-pålegg</a>');
  		$('.produkt .slide:nth-child(2) .image-slide-title').html('<a href="/produkt-brus">Brus</a>');
  		$('.produkt .slide:nth-child(3) .image-slide-title').html('<a href="/juleprodukt">Juleprodukt</a>');
  		$('.produkt .slide:nth-child(4) .image-slide-title').html('<a href="/produkt-storhusholdning">Storhusholdning</a>');
  		$('.produkt .slide:nth-child(5) .image-slide-title').html('<a href="/produkt-jus-og-nektar">Jus</a>');

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

