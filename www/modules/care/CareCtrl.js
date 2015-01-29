'use strict';

angular
    .module('izy-companion.home', [])
    .controller('CareCtrl', function ($scope, $rootScope, $ionicTabsDelegate, $timeout, User, UserEvents, Person) {

        angular.extend($scope, {
            login: function(user) {
                $rootScope.currentUser = User.getConnectedUser(user.login, function(u) {
                    $rootScope.currentPerson = u.profile;
                    Person.setCurrent(u.profile);
                    //index child
                    u.profile.childrenById = {};
                    angular.forEach(u.profile.children, function(child) {
                        u.profile.childrenById[child._id] = child;
                    });
                    $scope.loadCare(user);
                });
            },
            loadCare: function(user) {
                $scope.cares = UserEvents.query(
                    {
                        login: user.login,
                        start: new XDate().addDays(-1).getTime(),
                        end: new XDate().addDays(1).getTime(),
                        status:  "<deleted"

                    }, function (events) {
                    });
            }
        });

        $timeout(function () {
            $ionicTabsDelegate.$getByHandle('care-tabs').select(1);
        }, 50);

        User.get({login:"current"}, function(user) {
            $scope.login(user);
        }, function(error) {
            window.location = '/login';
        });
    });
