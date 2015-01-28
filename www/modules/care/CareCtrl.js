'use strict';

angular
    .module('izy-companion.home', [])
    .controller('CareCtrl', function ($scope, $ionicTabsDelegate, $timeout) {
        $timeout(function () {
            $ionicTabsDelegate.$getByHandle('care-tabs').select(1);
        }, 50);
    });
