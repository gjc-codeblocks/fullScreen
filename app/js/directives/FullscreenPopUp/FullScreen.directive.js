app.directive('fullScreen', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'app/js/directives/FullscreenPopUp/FullScreen.html',
	controller: 'fullScreenController'
  }; 
});