(function() {
   angular
      .module('fbaseballDraftRankerApp')
      .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');

         $stateProvider
            .state('home', {
               url: '/home',
               templateUrl: '../views/partials/main.html'
            })
            .state('test', {
               url: '/test',
               templateUrl: '../views/partials/test.html'
            });
      }]);
})();
