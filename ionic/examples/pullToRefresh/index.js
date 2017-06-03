/**
 * Created by Administrator on 2017/6/3.
 */
angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('actionsheetCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
        $scope.items = [
            {'name': 'HTML5'},
            {'name': 'JavaScript'},
            {'name': 'Css3'}
        ];
        $scope.doRefresh = function() {
            $http.get('package.json')
                .success(function(newItems) {
                    $scope.items = newItems;
                }).error(function(response) {
                    alert("error!");
                }).finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    }]);