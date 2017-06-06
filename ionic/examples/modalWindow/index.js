/**
 * Created by TaYf on 2017/6/6 0006.
 */
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $ionicModal) {
        $scope.contacts = [
            {name: 'Gordon Freeman'},
            {name: 'Barney Calhoun'},
            {name: 'Lamarr the Headcrab'}
        ];
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.createContact = function(u) {
            $scope.contacts.push({name: u.firstName + ' ' + u.lastName})
            $scope.modal.hide();
        };
//        $scope.openModal = function() {
//            $scope.modal.show();
//        };
//        $scope.closeModal = function() {
//            $scope.modal.hide();
//        };
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        $scope.$on('modal.hidden', function() {

        });
        $scope.$on('modal.removed', function() {

        });
    });