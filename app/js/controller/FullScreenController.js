app.controller('fullScreenController', ['$scope', function($scope, $window) {

	$scope.cars = [
	    {
	    	cor: 'vermelho',
	    	url: 'views/img/vermelho.png',
	    	exibir: true
	    },
	    {
	    	cor: 'prata',
	    	url: 'views/img/prata.png',
	    	exibir: false
	    },
	    {
	    	cor: 'preto',
	    	url: 'views/img/preto.png',
	    	exibir: false
	    },
	];
	
	$scope.infos = [
        {
        	titulo: 'Motor',
        	descricao: 'Motor motor motr motor',
        	top: '51.99%',
        	right: '46.99%',
        	showDescricao: false 
        },
        {
        	titulo: 'Porta',
        	descricao: 'Porta porta porta',
        	top: '53%',
        	right: '72%',
        	showDescricao: false 
        },
        {
        	titulo: 'Rodas',
        	descricao: 'Rodas rodas rodas',
        	top: '64%',
        	right: '61%',
        	showDescricao: false 
        },
        
	];	
	
	$scope.showDescricao = function(data){
		$scope.infos[data].showDescricao = !$scope.infos[data].showDescricao;
	}
	
	$scope.changeColor = function(color){
		angular.forEach($scope.cars, function(value, key){
			if(value.cor == color){
				$scope.cars[key].exibir = true;
			} else{
				$scope.cars[key].exibir = false;
			}
		});
	}	
	
	$(function() {
		$('.pop-up').hide();
		$('.pop-up').fadeIn(500);		  
		$('.close').click(function (e){ 
			$('.fullScreen').fadeOut(500);
			$('.adBlock').fadeOut(500);
			e.stopPropagation();
		});
			
		$('.fullScreen').width($(window).width());
		$('.fullScreen').height( ($('.fullScreen').width() * 0.494441));
		
		setTimeout(function() {
			$('.img_').css('-webkit-filter', 'brightness(100%)');
			$('.background-02').css('-webkit-filter', 'brightness(100%)');
			
			setTimeout(function() {
				$('.img-container').css('transition', '0s');
				$('.img_car').css('transition', '0s');
				$('.background-02').css('transition', '0s');
			}, 1000);			
		}, 3000);
		
		setTimeout(function() {
			$('.info').css('visibility', 'visible');
			$('.colors').css('visibility', 'visible');
			$('.texto').css('visibility', 'visible');
		}, 6000);
		
		setTimeout(function() {
			$('.img-container').css('bottom', '0px');
			$('.img_car').css('bottom', '12%');
			$('.background-02').css('bottom', '0px');
		}, 500);		
		
		$(window).resize(function(){
			adjustBanner();
		});
		
		var adjustBanner = function(){
			var oDiv = document.getElementById("FullScreen");
			
			var iWidth = window.innerWidth;
		    var iHeight = iWidth * 0.494441; 
		    
		    oDiv.style.width = iWidth.toString() + "px";
		    oDiv.style.height = iHeight.toString() + "px";
		    oDiv.style.lineHeight = oDiv.style.height;
			
			if($('.fullScreen').width() >= $(window).width() && $('.fullScreen').width() > 540){
				var iWidth = window.innerWidth;
			    var iHeight = iWidth * 0.494441; 
			    
			    oDiv.style.width = iWidth.toString() + "px";
			    oDiv.style.height = iHeight.toString() + "px";
			    oDiv.style.lineHeight = oDiv.style.height;
			} 			
			if($('.fullScreen').height() >= $(window).height()){
				var iHeight = window.innerHeight; 
				var iWidth = iHeight / 0.494441;
			    
			    oDiv.style.width = iWidth.toString() + "px";
			    oDiv.style.height = iHeight.toString() + "px";
			    oDiv.style.lineHeight = oDiv.style.height;
			}
			
			if($(window).width() > 540){
				$('.info-content').width(iWidth);
				$('.info-content').height(iHeight - 60);
				$('.img-container').height(iHeight -60);
				$('.content').height(iHeight - 60);
			} else{
				$('.content').height('100%');
				$('.fullScreen').removeAttr('style');
				$('.fullScreen').css('bottom', '0px');
			}
		};
		
		adjustBanner();
	});	
}]);

