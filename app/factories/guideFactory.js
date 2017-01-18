app.factory('guideFactory', function($http){

    function getGuides(){
        //returns a promise to use resolve method
        return new Promise(function(resolve, reject){
            //calls for the data
            return $http.get(`data/guides.json`)
            
            .then(function(json){
                let parsedData = json.data.guides
                resolve(parsedData)
            })
        })
    }
    //factory returns an object containing parsed and cleaned data
    return {getGuides}
})
