/**
 * Created by TaYf on 2017/6/6 0006.
 */
angular.module('ionicApp', ['ionic'])
.controller('AppCtrl', function($scope, $timeout, $ionicLoading) {
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $timeout(function() {
            $ionicLoading.hide();
            $scope.stooges = [
                {name: 'Moe'},
                {name: 'Larry'},
                {name: 'Curly'}
            ];
        }, 2000);
    });