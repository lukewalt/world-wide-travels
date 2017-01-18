app.factory('guideFactory', function($http){

    return {
        guideList: () => {
            return $http.get(`list.json`)
            .then(function(val){
                console.log("list.json", val.data);
                return val.data
            })
        }
    }

})
