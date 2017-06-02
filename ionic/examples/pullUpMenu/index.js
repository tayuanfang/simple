/**
 * Created by TaYf on 2017/6/2 0002.
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
        })
    })
    .controller('actionsheetCtrl', ['$scope', '$ionicActionSheet', '$timeout',
        function ($scope, $ionicActionSheet, $timeout) {
            $scope.show = function() {
                var hideSheet = $ionicActionSheet.show({
                    buttons: [
                        {text: '<b>Share</b> This'},
                        {text: 'Move'}
                    ],
                    destructiveText: 'Delete',
                    titleText: 'Modify your album',
                    cancelText: 'Cancel',
                    cancel: function() {

                    },
                    buttonClicked: function(index) {
                        return true;
                    }
                });
                $timeout(function() {
                    hideSheet();
                }, 2000);
            };

        }
    ]);