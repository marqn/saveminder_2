app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
         //controller: 'indexCtrl',
         templateUrl: 'start.html'
         })
        .when('/learn', {
            //controller: 'learnCtrl',
            templateUrl: 'learn.html'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});

app.controller('appCtrl', ["$scope",
    function ($scope) {

    }]);