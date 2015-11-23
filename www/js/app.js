// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app= angular.module('brc', ['ionic', 'brc.controllers','angular-loading-bar', 'ngAnimate'])
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.spinnerTemplate = '<div class="whirly-loader">Loading…</div>';
//   }])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tsermon', {
    url: '/tsermon',
    views: {
      'menuContent': {
        templateUrl: 'views/tsermon.html',
        controller: 'TsermonCtrl'
      }
    }
  })

  .state('app.sermon', {
      url: '/sermon',
      views: {
        'menuContent': {
          templateUrl: 'views/sermon.html',
          controller: 'SermonCtrl'
        }
      }
    })

  .state('app.sermon-list', {
      url: '/sermon-list',
      views: {
        'menuContent': {
          templateUrl: 'views/sermonlist.html',
          controller: 'SermonlistCtrl'
        }
      }
    })

  .state('app.versetoday',{
    url: '/versetoday/:ID',
    views: {
      'menuContent':{
        templateUrl:'views/versetoday.html',
        controller: 'VersetodayController'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/sermon');
});
