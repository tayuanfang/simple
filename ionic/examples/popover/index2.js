/**
 * Created by TaYf on 2017/6/8 0008.
 */
angular.module('ionicApp', ['ionic'])
    .controller('appCtrl', ['$scope', '$ionicPopover', '$timeout', function($scope, $ionicPopover, $timeout) {
        $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        });
        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">我的浮动框标题</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
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