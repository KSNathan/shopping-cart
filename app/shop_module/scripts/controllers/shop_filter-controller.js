
 angular.module('currentPtojectApp').controller('shopFilterCtrl', function ($scope,$rootScope) {

$rootScope.productName = "";
$rootScope.slider = {
    minValue: 100,
    maxValue: 2000,
    options: {
        floor: 0,
        ceil: 2000,
        step: 100
    }
  };

$scope.search = function(){

	$rootScope.productName = $scope.Name;
}

});