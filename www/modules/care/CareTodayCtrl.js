'use strict';

angular
    .module('izy-companion.home')
    .controller('CareTodayCtrl', function ($scope) {
        angular.extend($scope, {
            items: [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7}]
        });

    });
