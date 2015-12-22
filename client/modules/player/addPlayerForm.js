(function() {
   angular
      .module('fbaseballDraftRankerApp')
      .directive('addPlayerForm', addPlayerForm);

   function addPlayerForm() {
      return {
         restrict: 'E',
         templateUrl: '/client/views/partials/addPlayerForm.html',
         link: function(scope, element, attrs) {
            console.log('addPlayerForm directive loaded');
            scope.playerList = [];
            scope.add = function(player) {
               scope.playerList += player.lastName;
               console.log(scope.playerList);
            };
         }
      };
   }
})();
