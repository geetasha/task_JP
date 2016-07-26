
var app = angular.module('ctrlApp',[]);
app.controller('authenticationCtrl', authenticationCtrl);

function authenticationCtrl ($scope,$state) {
    $scope.email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    $scope.user = {userId:"",password:""};

    $scope.signin = function () {
        if($scope.user.userId != "" && $scope.user.password != "" ){
            $state.go('stocklist');
        }
    }
}