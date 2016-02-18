(function() {
  'use strict';

  angular
    .module('fbaseballDraftRankerApp')
    .run(function($rootScope) {
      $rootScope._ = window._;
    });
})();
