app.directive('scroll', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
        	scope.$broadcast('SCROLL', this.pageYOffset);
        });
    };
});