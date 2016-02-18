(function() {
   'use strict';

   angular
      .module('fbaseballDraftRankerApp')
      .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');

         $stateProvider
            .state('home', {
               url: '/home',
               templateUrl: '../client/main/main.html'
            })
            .state('about', {
               url: '/about',
               templateUrl: '../client/about/about.html'
            });
      }]);
})();
