$(document).ready(function() {
	var windowHeight = window.innerHeight,
		windowHeightPercent = windowHeight/1000;
	//Трансформация схемы зала при изменении окна браузера
	/*$(window).resize(function(){		
		console.log(windowHeightPercent);
		if(windowHeightPercent < 1){
			$('.hall-scheme').css('transform', 'scale('+windowHeightPercent+')');
		}
	});*/	
});