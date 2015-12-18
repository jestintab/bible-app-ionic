angular.module('verseService',[])

var baseUrl ='http://perfectinchrist.org/wp-json/';

app.factory('todayVerse',function($http){
    return $http.get( baseUrl + 'posts?filter[posts_per_page]=1&filter[order]=DESC')
    .success(function(data){ 
      return data;
    })
    .error(function(err){
      return err;
    })
  });



app.factory('weekVerse',function($http){
    return $http.get( baseUrl + 'posts?filter[posts_per_page]=10&filter[order]=DESC')
    .success(function(data){ 
      return data;
    })
    .error(function(err){
      return err;
    })
  });

app.factory('lastFiveVerse',function($http){
    return $http.get( baseUrl + 'posts?filter[posts_per_page]=10&filter[order]=DESC')
    .success(function(data){ 
      return data;
    })
    .error(function(err){
      return err;
    })
  });