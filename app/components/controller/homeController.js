/**
 * Created by mehdi on 26/05/2017.
 */
'use strict';

angular.module('angular.module', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home',{
        templateUrl:'views/partial/home.html',
        controller:'HomeCtrl'
    });

}])

.controller('HomeCtrl',[function ($scope) {

    $scope.backgroundImg='/components/img/background.jpg';
    $scope.serliLogo='/components/img/serliLogo.jpg';


}]);

