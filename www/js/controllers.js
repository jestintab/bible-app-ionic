angular.module('brc.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})


.controller('TsermonCtrl', function($scope, $http) {
    $http.get('http://perfectinchrist.org/wp-json/posts?filter[posts_per_page]=1&filter[order]=DESC').then(function(resp) {
    console.log('Success', resp);
    $scope.lists =resp.data;
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
   

})

.controller('SermonCtrl', function($scope, $http,$location) {
    $http.get('http://perfectinchrist.org/wp-json/posts?filter[posts_per_page]=8&filter[order]=DESC').then(function(resp) {
    console.log('Success', resp);
    $scope.lists =resp.data;
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
 })  

  .controller('SermonlistCtrl', function($scope, $http, getverse) {
    getverse.success(function(data){
    $scope.lists =data;
    console.log(data);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });  

 // $scope.onItemView= function(sermonid){
 //      // fetching id of the sermon and get the sermon using the id
 //      $location.path( "/versetoday" );
 //      $http.get('http://perfectinchrist.org/wp-json/posts/'+sermonid).then(function(resp) {
 //        console.log(sermonid);
 //        console.log('Success', resp);
 //          $scope.lists =resp.data;
 //          // For JSON responses, resp.data contains the result
 //        }, function(err) {
 //          console.error('ERR', err);
 //          // err.status will contain the status code
 //  });  

       
 //    }


    })

    .controller('VersetodayController',function($scope,$http,$stateParams){
      var verseid = $stateParams.ID;
      $http.get('http://perfectinchrist.org/wp-json/posts/'+verseid).then(function(resp) {

        console.log("working"+verseid);
      console.log('Success', resp);
          $scope.verses =resp.data;
          // For JSON responses, resp.data contains the result
        }, function(err) {
          console.error('ERR', err);
          // err.status will contain the status code
  });  

 $scope.onItemView= function(sermonid){
      // fetching id of the sermon and get the sermon using the id
      $http.get('http://perfectinchrist.org/wp-json/posts/'+sermonid).then(function(resp) {

        console.log('Success', resp);
          $scope.lists =resp.data;
          // For JSON responses, resp.data contains the result
        }, function(err) {
          console.error('ERR', err);
          // err.status will contain the status code
  });  

       
    }

 //  $scope.getSinglePage = function(data){
 //    console.log(data);

 //     $location.path( "/sermon" );
    
 //  }  
   
  });  


