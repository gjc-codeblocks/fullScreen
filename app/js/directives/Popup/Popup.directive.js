app.directive('popUp', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'app/js/directives/Popup/Popup.html',
	controller: 'carController'
  }; 
});