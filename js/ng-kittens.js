var kittens = angular.module('kittensDirective', []);

kittens.factory('kittenUrls', function() {
  var kittenCounter = {};

  return {
    getUrl: function(width, height, mono) {
      var seed = Math.floor(Math.random() * 23);
      var hash = width + ' ' + height;

      kittenCounter[hash] = kittenCounter[hash] || 0;

      var offset = kittenCounter[hash]++;

      width = parseInt(width) + (Math.floor(offset / 2) + seed) % 23;
      height = parseInt(height) + (Math.ceil(offset / 2) + seed) % 17;

      var baseUrl = 'http://placekitten.com/';

      if (mono == 'true' || mono == '1') {
        baseUrl += 'g/';
      }

      return baseUrl + width + '/' + height;
    }
  }
});

kittens.directive('kitten', ['kittenUrls', function(kittenUrls) {
  return {
    restrict: 'E',
    scope: {width: '@', height: '@', mono: '@'},
    link: function(scope, elem, attrs) {
      var kittenUrl = kittenUrls.getUrl(attrs.width, attrs.height, attrs.mono);

      scope.style = {
          'background-image': 'url(' + kittenUrl + ')',
          'background-position': 'center',
          width: attrs.width + 'px',
          height: attrs.height + 'px'}
      },
    templateUrl: 'templates/ng-kittens.html'
  }
}]);
