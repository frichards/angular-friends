var app = angular.module('friendApp');

app.controller('allFriends', function($scope, friendData){

    friendData.myFriends
        .then(function(data){
            console.log('the raw data is', data);
            $scope.people = data.data.results;
            for (var i = 0; i < data.data.results.length; i++) { 
                if (data.data.results[i].friend_count !== null){
                    data.data.results[i].friend_count=parseInt(data.data.results[i].friend_count);
                }
            }
              return data.data.results;
         });

    $scope.searchFriend = '';
    $scope.searchLocation = '';

    $scope.searchField = '';

}); 




// for (var i in Object) { 
//     console.log(Object[i]); 
//     console.log(i); 
//     if (i === friend_count && Object[i] !=== null){
//         Object[i]=parseInt(Object[i] );
//     }

// };




// {
// friend_count: "1200",
// name: "Naishi Zhang",
// }

 // for (var i in Object) { 
 //                    console.log(Object[i]); 
 //                    console.log(i); 
 //                    if (i === "friend_count" && Object[i] !== null){
 //                         console.log(Object[i]);
 //                    }

 //                }

                //1200 and undefined