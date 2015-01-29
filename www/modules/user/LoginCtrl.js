'use strict';

angular
    .module('izy-companion.user')
    .controller('LoginCtrl', function ($scope, Session) {
        angular.extend($scope, {
            session: new Session(),
            login: function () {
                //force value flush in object in case of browser autofill
                $scope.errorMessageKey = "";
                if (!$scope.session.login || !$scope.session.password) {
                    $scope.errorMessageKey = "missingMandatoryField";
                    return;
                }

                var session = new Session();
                session.login = $scope.session.login;
                session.passwordHash = SparkMD5.hash($scope.session.password);
                delete session.password;

                session.$authenticate(function () {

                    document.location = '/'; // navigate to app home page
                });
            }
        });
    });
