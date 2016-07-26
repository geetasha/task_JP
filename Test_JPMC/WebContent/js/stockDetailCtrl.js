
angular.module('ctrlApp').controller('StockDetailCtrl', StockDetailCtrl);

function StockDetailCtrl ($stateParams,$scope,$rootScope) {
console.log($stateParams,"$stateParams");

    $scope.stockItem = $rootScope.stockList[$stateParams.id];

}