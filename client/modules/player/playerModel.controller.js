(function() {
   angular
      .module('fbaseballDraftRankerApp')
      .controller('PlayerModelController', PlayerModelController);

   function PlayerModelController($scope) {
      // var firstName = $scope.firstName,
      //    lastName = $scope.lastName,
      //    position = $scope.position;
      //
      // $scope.player = {
      //    firstName: firstName,
      //    lastName: lastName,
      //    position: position
      // };
      $scope.playerList = {};

      $scope.add = function(player) {
         $scope.playerList += player;
         console.log($scope.playerList);
      };
   }
})();
