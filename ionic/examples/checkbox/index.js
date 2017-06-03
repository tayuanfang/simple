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
                StatubBar.styleDefault();
            }
        });
    })
    .controller('actionsheetCtrl', ['$scope', function($scope) {
        $scope.devList = [
            {text: "HTML5", checked: true},
            {text: "CSS3", checked: false},
            {text: "JavaScript", checked: false}
        ];
        $scope.pushNotificationChange = function() {
            console.log('Push Notification Change', $scope.pushNotification.checked);
        };
        $scope.pushNotification = {checked: true};
        $scope.emailNotification = 'Subscribed';
    }]);