/**
 * Created by mehdi on 26/05/2017.
 */
'use strict';

angular.module('angular.module', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home',{
            templateUrl:'views/partial/language.html',
            controller:'LanguageCtrl'
        });

    }])

    .controller('LaguageCtrl',[function () {



    }]);

