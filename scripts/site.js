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

	$('.bc').jCrumb(); 

  	//$(function(){
	//	var url = location.pathname; // = location.href
	//	var parts = location.href.split('/').slice(3);

	//	parts[0] = 'Forside ';
	//	var breadcrumb = parts.join(' / ');
	//	$('.bc').html(breadcrumb);

  	//});


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


(function(a){a.j.m=function(k){function m(b){var c=j();if(c){var e=d.h;crumbCheck=c.split("*");crumbCheck[crumbCheck.length-1]!=b&&crumbCheck.push(b);crumbCheck.length>e&&crumbCheck.splice(0,1);c=crumbCheck.join("*")}else c=b;document.cookie="breadcrumbs="+c+"; path=/"}function j(){for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var e=b[c].replace(/^\s+/,"");if(e.indexOf("breadcrumbs=")==0)return e.substring(12,e.length)}}var d={d:4,h:15,g:"jCrumb",c:false,e:"&gt;"};return this.i(function(){if(k)d=
a.extend(d,k);m(document.title+"^"+window.location.href);var b=j(),c="",e=a(document.createElement("ul")).a(d.g).b(a(this)),f="";d.c&&e.a("fg-buttonset fg-buttonset-single ui-helper-clearfix");if(b){b=b.split("*");startIndex=0;if(b.length>d.d)startIndex=b.length-d.d;for(var g=startIndex;g<b.length-1;g++){c=b[g].split("^");f=a(document.createElement("li"));var h=a(document.createElement("a"));h.f({href:c[1]}).text(c[0]).b(f.b(e));h.click(function(){a(this).text();a(this).f("href");var l=a(this).data("index"),
i=j();if(i){crumbCheck=i.split("*");crumbCheck.splice(l,crumbCheck.length-l);i=crumbCheck.join("*");document.cookie="breadcrumbs="+i+"; path=/"}});h.data("index",g);if(d.c){f.a("fg-button ui-state-default ui-priority-primary");if(g===0){f.a("ui-corner-left");h.a("ui-icon ui-icon-home")}if(startIndex!==0&&g===startIndex){f.a("ui-corner-left");h.a("ui-icon ui-icon-carat-1-w")}}else d.e&&a(document.createElement("span")).l(d.e).b(f)}f=a(document.createElement("li"));c=b[b.length-1].split("^");a(document.createElement("span")).text(c[0]).b(a(f).b(a(e)));
d.c&&f.a("fg-button ui-state-default ui-priority-primary ui-corner-right ui-state-active");a(".fg-button:not(.ui-state-disabled)").k(function(){a(this).a("ui-state-hover")},function(){a(this).n("ui-state-hover")})}})}})(jQuery);


}); // End dom ready



