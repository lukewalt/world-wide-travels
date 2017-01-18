

// guideFactory is injected so this controller can gain access to the returned obj from factory
app.controller('bookCtrl', function($scope, guideFactory){
    console.log('bookCtrl');
    guideFactory.guideList()
    .then((val) => {
        $scope.list = val;
    })

})
