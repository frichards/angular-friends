var app = angular.module('friendApp');

app.controller('allFriends', function($scope, friendData){

    friendData.myFriends
        .then(function(data){
            console.log('the raw data is', data);
            $scope.people = data.data.results;
            
            for(var i = 0; i < data.data.results.length; i++){
                
                for (var key in Object) {
                        var prop = friend_count in data.data.results;
                        var obj = Object.friend_count;
                         if(obj != null){
                          obj = filterInt(obj);
                         }
                }
               
            }
            
             console.log('the new data is', data);
              return data.data.results;
         });

    $scope.searchFriend = '';
    $scope.searchLocation = '';

    $scope.searchField = '';

}); 

