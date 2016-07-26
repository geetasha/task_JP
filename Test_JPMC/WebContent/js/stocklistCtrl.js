 angular.module('ctrlApp').controller('StockListCtrl', StockListCtrl);

function StockListCtrl ($scope,$rootScope,$state) {

    $rootScope.stockList = [
        {
            "productColor":"blue",
            "name":"BIC Round Stic Xtra Life Ball Pen,Medium Point(1.0MM),Blue ,12-Count",
            "price":"41.25",
            "rating":"445",
            "expectedDelivery":"Get it by Thursday",
            "productImage":"img/big_pic.jpg"
        },
        {
            "productColor":"black",
            "name":"Round Life Ball Pen,Medium Point(1.0MM),Black ,12-Count",
            "price":"25.00",
            "rating":"500",
            "expectedDelivery":"Get it by sunday",
            "productImage":"img/reynolds.jpg"
        }

    ];

    $scope.details = function(id){
        $state.go('stock',{"id":id,"data":$scope.stockList});
    }


}