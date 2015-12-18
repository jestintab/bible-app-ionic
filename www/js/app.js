// Daily verse

var app = angular.module('dbv', ['ionic', 'verseControllers','angular-loading-bar', 'ngAnimate','verseService'])
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.spinnerTemplate = '<div class="whirly-loader">Loading…</div>';
//   }])
// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })
.run(function($ionicPlatform, $rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
                StatusBar.overlaysWebView(true);
              }
            });

  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: '<ion-spinner icon="spiral"/>'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.today-verse', {
    url: '/',
    views: {
      'menuContent': {
        templateUrl: 'views/today-verse.html',
        controller: 'todayVerseCtrl'
      }
    }
  })

  .state('app.list-verse', {
    url: '/list-verse',
    views: {
      'menuContent': {
        templateUrl: 'views/list-verse.html',
        controller: 'lastVerseCtrl'
      }
    }
  })

  .state('app.week-verse', {
    url: '/week-verse',
    views: {
      'menuContent': {
        templateUrl: 'views/week-verse.html',
        controller: 'weekVerseCtrl'
      }
    }
  })

  .state('app.versetoday',{
    url: '/today-verse/:ID',
    views: {
      'menuContent':{
        templateUrl:'views/versetoday.html',
        controller: 'VersetodayController'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
});
