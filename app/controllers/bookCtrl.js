

// guideFactory is injected so this controller can gain access to the returned obj from factory
app.controller('bookCtrl', function($scope, guideFactory){
    // console.log(guideFactory.getGuides());

    guideFactory.getGuides().then(function(resolve){
        $scope.list = resolve
        console.log($scope.list, resolve);
    });

})
