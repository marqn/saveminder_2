angular
    .module('BlankApp', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                console.log("clicked");
                $mdSidenav(componentId).toggle();
            }
        }
    });