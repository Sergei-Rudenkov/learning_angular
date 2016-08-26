/**
 * Created by sergei_rudenkov on 8/26/16.
 */
angular.module('guitar', ['ngRoute'])
    .directive('guitarSmallPreview', function () {
        return {
            restrict: 'E',
            templateUrl: 'guitar-small-preview.html',
            scope: {guitar: '='}
        }

    })
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $routeProvider
                .when('/guitars', {
                    templateUrl: 'guitar.html',
                    controller: 'IndexContr'
                })
                .when('/fanny-cat', {
                    templateUrl: 'cat.html',
                    controller: 'CatController'
                })
                .otherwise({
                    redirectTo: 'guitars'
                });

        }])
    .service('userService', function () {
        var user = "I am a user";
        return {
            getUser: function () {
                return user;
            },
            setUser: function (value) {
                user = value;
            }
        }
    })
    .controller('CatController', ['$scope', 'userService', function ($scope, userService){
        $scope.catName = userService.getUser();
        }]
    )
    .controller('IndexContr', ['$scope', 'userService', function ($scope, userService) {
        $scope.age = 18;
        $scope.newGuitar = {};
        $scope.user = userService.getUser();
        $scope.addOne = function () {
            $scope.age++;
        };
        $scope.addUser = function () {
            userService.setUser($scope.user)
        }
        $scope.guitars = [
            {
                name: 'acoustic',
                src: 'http://www.takamine.com/templates/default/images/gclassical.png'
            },
            {
                name: 'electra',
                src: 'http://thehub.musiciansfriend.com/images/stratguide/fender-american-standard-stratocaster-electric-guitar-ocean-blue-metallic-800x272.jpg'
            }];
        $scope.addGuitar = function () {
            $scope.guitars.push({
                name: $scope.newGuitar.name,
                src: $scope.newGuitar.src,
                date: new Date()
            })
        }
        $scope.delete = function (item) {
            var index = $scope.guitars.indexOf(item);
            $scope.guitars.splice(index, 1)
        }

    }
    ]);