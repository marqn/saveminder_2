var app = angular
    .module('app', ['ngMaterial', 'ngRoute'])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function () {
                console.log("clicked");
                $mdSidenav(componentId).toggle();
            }
        }
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
    });
