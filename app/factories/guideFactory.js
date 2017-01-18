app.factory('guideFactory', function($http){

    return {
        guideList: () => {
            return $http.get(`data/guides.json`)
            .then(function(val){
                console.log("DATA  ", val.data.guides);
                return val.data.guides
            })
        }
    }
})
