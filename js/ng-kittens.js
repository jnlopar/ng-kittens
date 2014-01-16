angular.module('kittensDirective', [])
  .directive('kitten', function() {
    return {
      restrict: 'E',
      scope: {
        width: '=',
        height: '='
      },
      templateUrl: 'templates/ng-kittens.html'
    }
  });
