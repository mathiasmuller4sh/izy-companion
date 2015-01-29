
angular
    .module('izycompanion', ['ionic', 'analytics','ngRoute', 'ngResource', 'izy-companion.home', 'izy-companion.user', APP.name])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(0);
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "modules/user/login.html"
            })
            .state('root', {
                url: "/",
                templateUrl: "modules/global/layout.html"
            })
            .state('root.care', {
                url: "care",
                views: {
                    'tab-1-content': {
                        templateUrl: "modules/care/care-list.html"
                    }
                }
            })
//
//  // Each tab has its own nav history stack:
//
//  .state('home.root', {
//    url: '/home',
//    views: {
//      'tab-dash': {
//        templateUrl: 'modules/home/home.html',
//        controller: 'HomeCtrl'
//      }
//    }
//  })
//
//  .state('tab.chats', {
//      url: '/chats',
//      views: {
//        'tab-chats': {
//          templateUrl: 'templates/tab-chats.html',
//          controller: 'ChatsCtrl'
//        }
//      }
//    })
//    .state('tab.chat-detail', {
//      url: '/chats/:chatId',
//      views: {
//        'tab-chats': {
//          templateUrl: 'templates/chat-detail.html',
//          controller: 'ChatDetailCtrl'
//        }
//      }
//    })
//
//  .state('tab.friends', {
//      url: '/friends',
//      views: {
//        'tab-friends': {
//          templateUrl: 'templates/tab-friends.html',
//          controller: 'FriendsCtrl'
//        }
//      }
//    })
//    .state('tab.friend-detail', {
//      url: '/friend/:friendId',
//      views: {
//        'tab-friends': {
//          templateUrl: 'templates/friend-detail.html',
//          controller: 'FriendDetailCtrl'
//        }
//      }
//    })
//
//  .state('tab.account', {
//    url: '/account',
//    views: {
//      'tab-account': {
//        templateUrl: 'templates/tab-account.html',
//        controller: 'AccountCtrl'
//      }
//    }
//  })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });
