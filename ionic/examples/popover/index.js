/**
 * Created by TaYf on 2017/6/8 0008.
 */
angular.module('ionicApp', ['ionic'])
.controller('appCtrl', ['$scope', '$ionicPopover', '$timeout', function($scope, $ionicPopover, $timeout) {
        $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        });
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });
        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        $scope.$on('popover.hidden', function() {

        });
        $scope.$on('popover.removed', function() {

        });
    }]);