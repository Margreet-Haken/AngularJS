(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.totalItems = 0;
  $scope.lunchItems = "";

  $scope.calculateItems = function (InputString) {
    var totalItems = 0;
    if (InputString.length > 0){
        totalItems  = InputString.replace(/[^,]/g,'').length + 1;
       }
       return totalItems;
    };

  $scope.getMessage = function () {
    var amountLunchItems = $scope.calculateItems($scope.lunchItems);

    if (amountLunchItems > 3){
      $scope.message = "Too much!";
    }
    else if (amountLunchItems === 0){
      $scope.message = ""
    }
    else{
        $scope.message = "Enjoy!"
    }
  };
}

})();
