app.config(function($routeProvider){
    $.routeProvider
        .when('/', {
            controller: 'bookCtrl',
            templateUrl: 'partials/book.html'
        })
})
