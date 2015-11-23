app.factory('getverse',['$http',
                        function($http){
                        return $http.get('http://perfectinchrist.org/wp-json/posts?filter[posts_per_page]=10&filter[order]=DESC')
                        .success(function(data){ 
                        return data;
   						  
                         })
                        .error(function(err){
                          return err;
                        });
                        }]);