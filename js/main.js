$(document).ready(function(){
	$(window).bind('scroll',function(e){});
	$('a.home').click(function(){

		$('html,body').animate({scrollTop:0}, 1000);
		return false;

	});
	$('a.about').click(function(){

		$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
		return false;

	});
	$('a.creativity').click(function(){

		$('html,body').animate({scrollTop:$('#creativity').offset().top}, 1000);
		return false;

	});
	$('a.works').click(function(){

		$('html,body').animate({scrollTop:$('#works').offset().top}, 1000);
		return false;

	});
	$('a.news').click(function(){

		$('html,body').animate({scrollTop:$('#news').offset().top}, 1000);
		return false;

	});
});
