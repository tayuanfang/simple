/**
 * Created by TaYf on 2017/6/6 0006.
 */
angular.module('LoadingApp', ['ionic'])
.controller('LoadingCtrl', function($scope, $ionicLoading, $timeout) {
    $scope.show = function() {
        $ionicLoading.show({
            template: '<b>Loading ... please wait</b>'
        });
        $timeout(function(){
            $scope.hide();
        }, 2000);
    };
    $scope.hide = function() {
        $ionicLoading.hide();
    };
});