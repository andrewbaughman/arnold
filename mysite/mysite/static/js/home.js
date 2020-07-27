$(document).ready(function(){
	dothehover();
	
});

function dothehover() {
	$('.arnold-faces').hover(function(){
		$('.content').find('.faceheading').toggleClass('swirlhover');
	});

}
