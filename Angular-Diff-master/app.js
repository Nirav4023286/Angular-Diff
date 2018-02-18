var app = angular.module('app', ['ds.objectDiff']);
app.controller('MyController', ['$scope', 'ObjectDiff', function($scope, ObjectDiff) {
    $scope.yourObjectOne = {
        name: "Honda",
        yourObjectOne1: {
            version: "petrol",
            yourObjectOne12: {
                versionno: "bs3"
            },
        },
        year: 2012,
        model: "CRV"
    };
    $scope.yourObjectTwo = {
        name: "Honda",
        yourObjectTwo2: {
            version: "diesel",
            yourObjectTwo23: {
                versionno: "bs4"
            },
        },
        year: 2017,
        model: "City"
    };

    // This is required only if you want to show a JSON formatted view of your object without using a filter
    $scope.yourObjectOneJsonView = ObjectDiff.objToJsonView($scope.yourObjectOne);
    $scope.yourObjectTwoJsonView = ObjectDiff.objToJsonView($scope.yourObjectTwo);

    // you can directly diff your objects js now or parse a Json to object and diff
    var diff = ObjectDiff.diffOwnProperties($scope.yourObjectOne, $scope.yourObjectTwo);

    // you can directly diff your objects including prototype properties and inherited properties using `diff` method
    var diffAll = ObjectDiff.diff($scope.yourObjectOne, $scope.yourObjectTwo);

    console.log(diffAll);
    // gives a full object view with Diff highlighted
    // $scope.diffValue = ObjectDiff.toJsonView(diff);

    // gives object view with onlys Diff highlighted
    // $scope.diffValueChanges = ObjectDiff.toJsonDiffView(diff);

}]);