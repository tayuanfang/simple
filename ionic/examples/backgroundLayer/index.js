/**
 * Created by Administrator on 2017/6/3.
 */
angular.module('starter', ['ionic'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAcessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
.controller('actionsheetCtrl', ['$scope','$timeout','$ionicBackdrop',function($scope, $timeout, $ionicBackdrop) {
        $scope.action = function() {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 1000);
        };
    }]);