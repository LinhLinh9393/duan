window.list= function($scope,$http){
    var api="http://localhost:3000/post/"

    $http.get(api)
        .then(function(response){
            $scope.list=response.data
        })
}