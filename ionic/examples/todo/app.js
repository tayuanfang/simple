/**
 * Created by Administrator on 2017/6/1.
 */
angular.module('ionicApp', ['ionic'])
    .factory('Projects', function() {
        return {
            all: function() {
                var projectString = window.localStorage['projects'];
                if(projectString) {
                    return angular.fromJson(projectString);
                }
                return [];
            },
            save: function(projects) {
                window.localStorage['projects'] = angular.toJson(projects);
            },
            newProject: function(projectTitle) {
                return {title: projectTitle, tasks: []};
            },
            getLastActiveIndex: function() {
                return parseInt(window.localStorage['lastActiveProject']) || 0;
            },
            setLastActiveIndex: function() {
                window.localStorage['lastActiveProject'] = index;
            }
        };
    })
    .controller('todoCtrl', function($scope, $ionicModal, $timeout, Projects, $ionicSideMenuDelegate) {
        var createProject = function(projectTitle) {
            var newProject = Projects.newProject(projectTitle);
            $scope.projects.push(newProject);
            Projects.save($scope.projects);
            $scope.selectProject(newProject, $scope.projects.length-1);
        };
        $scope.projects = Projects.all();
        $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];
        $scope.newProject = function() {
            var projectTitle = prompt('Project name');
            if(projectTitle) {
                createProject(projectTitle);
            }
        };
        $scope.selectProject = function(project, index) {
            $scope.activeProject = project;
            Projects.setLastActiveIndex(index);
            $ionicSideMenuDelegate.toggleLeft(false);
        }
        $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        $scope.tasks = [];
        $scope.closeNewTask = function() {
            $scope.taskModal.hide();
        };
        $scope.createTask = function(task) {
            if(!$scope.activeProject || task) {
                return;
            }
            $scope.tasks.push({title: task.title});
            Projects.save($scope.projects);
            $scope.taskModal.hide();
            task.title = "";
        };
        $scope.newTask = function() {
            $scope.taskModal.show();
        };
        $scope.toggleProjects = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $timeout(function() {
            if($scope.projects.length == 0) {
                while(true) {
                    var projectTitle = prompt('Your first project title:');
                    if(projectTitle) {
                        createProject(projectTitle);
                        break;
                    }
                }
            }
        });
    });