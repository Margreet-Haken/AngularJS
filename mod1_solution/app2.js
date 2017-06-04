(
    function() {
        'use strict';

        var lunchCheckController = function($scope) {
        	$scope.textClass = "";
            $scope.checkIfTooMuch = function() {
                if (!$scope.dishes) {
                    $scope.theMessage = "Please enter data first";
                    $scope.textClass = "text-danger";
                } else {
                    var dishesList = $scope.dishes.split(',').filter(function(dish) {
                        return dish.trim().length > 0;
                    });
                    $scope.theMessage = (dishesList.length <= 3) ? "Enjoy!" : "Too much!";
                    $scope.textClass = "text-success";
                }
            }
        }

        lunchCheckController.$inject = ['$scope'];

        angular.module("LunchCheck", [])
            .controller("LunchCheckController", lunchCheckController);

    }
)();
