

app.controller('bookCtrl', function($scope, $http){
    $http.get(`data/guides.json`)
    .then(function(json){
        console.log(json.data.guides);
        $scope.list = json.data.guides


        // $scope.list = Object.keys(array)
    })
})


// Directives:
// ng-app="<your module name>"
// ng-controller="bookCtrl"
// ng-repeat="book in books"
// A call to the data folder for guides.json using $http
// Use the $q service to wrap your http call in a promise
// $scope.books = <your array of guide books data>
