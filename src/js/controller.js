app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            //controller: 'indexCtrl',
            templateUrl: 'pages/start.html'
        })
        .when('/learn', {
            //controller: 'learnCtrl',
            templateUrl: 'pages/learn.html'
        })
        .when('/manager', {
            controller: 'managerCtrl',
            templateUrl: 'pages/manager.html'
        })
        .when('/manager/list', {
            controller: 'listCtrl',
            templateUrl: 'pages/managerList.html'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});

app.controller('appCtrl', ["$scope",
    function ($scope) {

    }]);

app.controller('managerCtrl', function ($scope, $mdDialog) {

    this.options = [
        'Delete',
        'Rename'
    ];

    $scope.showCreateCategory = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
            .title('Create new category')
            .placeholder('category name')
            .initialValue('')
            .targetEvent(ev)
            .ok('Create')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function (result) {
            $scope.status = 'You decided to name your dog ' + result + '.';
        }, function () {
            $scope.status = 'You didn\'t name your dog.';
        });
    };

});

app.controller('listCtrl', function ($scope) {
    $scope.toppings = [
        {
            first: 'applicable',
            second: 'odpowiedni; nadający się do użycia',
            wanted: true,
            category: 'easy',
            dateAdded: '26-07-2016',
            refresh: 45,
            elapsedTime: '00:34'
        },
        {
            first: 'involve',
            second: 'dotyczyć',
            wanted: false,
            category: 'easy',
            dateAdded: '26-07-2016',
            refresh: 45,
            elapsedTime: '00:34'
        },
        {
            first: 'likewise',
            second: 'podobnie ;również',
            wanted: true,
            category: 'easy',
            dateAdded: '26-07-2016',
            refresh: 45,
            elapsedTime: '00:34'
        },
        {
            first: 'anticipate',
            second: 'przewidywać; oczekiwać',
            wanted: false,
            category: 'easy',
            dateAdded: '26-07-2016',
            refresh: 45,
            elapsedTime: '00:34'
        },
    ];
})