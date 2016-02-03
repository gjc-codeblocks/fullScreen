app.directive('slideOutRight', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'app/js/directives/slideoutright.html',
	controller: 'slideOutController'
  }; 
});