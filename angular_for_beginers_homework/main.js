/**
 * Created by sergei_rudenkov on 8/27/16.
 */
angular.module('ice_cream_app', ['ngRoute'])
    .directive('iceCreamFrame', function () {
        return {
            restrict: 'E',
            templateUrl: 'ice-cream-frame.html',
            scope: {icecream: '='}
        }

    })
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $routeProvider
                .when('/ice_cream', {
                    templateUrl: 'icecream.html',
                    controller: 'IceController'
                })
                .when('/cart', {
                    templateUrl: 'cart.html',
                    controller: 'CartController'
                })
                .otherwise({
                    redirectTo: 'ice_cream'
                });

        }])
    .service('cartService', function () {
        var icecreams = [
            {
                name: 'ice cream cherry',
                src: 'http://a66c7b.medialib.glogster.com/media/89/89980c0ae0937046d3f97118fb11c0fca4d35990272dc63f8bf49f4e8af545e0/small-icecream-jpg.jpg',
                price: 1,
                selected: true
            },
            {
                name: 'ice cream blackberry',
                src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpggvBIIFsrskYRkkrb_7QTl1FJAMX0TuuUoaMClI9TLuAmmWY',
                price: 1.2,
                selected: false
            }];
        return {
            updateIce: function (item) {
                icecreams = item;
            },
            getIce: function () {
                return icecreams;
            }
        }
    })
    .controller('IceController', ['$scope', 'cartService', function ($scope, cartService) {
        $scope.icecreams = cartService.getIce();
        $scope.toggleIce = function () {

            cartService.updateIce($scope.icecreams);
        };
    }])
    .controller('CartController', ['$scope', 'cartService', function ($scope, cartService) {
        $scope.icecreams = cartService.getIce();
        $scope.totalPrice = $scope.icecreams.filter(function (ice) {
            if (ice.selected) {
                return ice;
            }
        }).reduce (function (a, b) {
            return a + b.price;
        }, 0);

    }]);