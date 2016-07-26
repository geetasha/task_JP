var app = angular.module("stocks",['ui.router','ctrlApp']);
app.config(function($stateProvider, $urlRouterProvider) {



    $stateProvider

        .state('login', {
            url: '/auth',
            templateUrl: 'auth.html',
            controller:'authenticationCtrl'
        })
        .state('stocklist', {
            url: '/stocklist',
            templateUrl: 'stocklist.html',
            controller:'StockListCtrl'
        })
        .state('stock', {
            url: '/stock/:id',
            templateUrl: 'stockDetail.html',
            controller:'StockDetailCtrl'

        })
    $urlRouterProvider.otherwise("/auth");

});

