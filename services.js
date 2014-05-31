
var app = angular.module('friendApp');

app.service('friendData', function($http){

	this.myFriends = $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json');
	    
});