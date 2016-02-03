$(document).ready(function(){
	$('body').height($(window).height);
	
	$('.img-content').css('bottom', '30px');
	
	$('.thumbnail').hide();
	
	setTimeout(function() {
		$('#img_').css('-webkit-filter', 'brightness(100%)');
	}, 3000);
	
	setTimeout(function() {
		$('.motor').css('visibility', 'visible');
	}, 3000);
		
	
//Carro
	$('.color-red').click(function(){
		$('#img_').attr("src", "views/img/vermelho.png");
	});
	
	$('.color-black').click(function(){
		$('#img_').attr("src", "views/img/preto.png");
	});
	
	$('.color-prata').click(function(){
		$('#img_').attr("src", "views/img/prata.png");
	});
	
	$(".motor").hover(function(){
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");		
	});
	
	$('.motor').click(function(){
		$('.thumbnail').slideToggle("slow");
	})
	
	
});