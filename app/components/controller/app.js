'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ngRoute',
  'portfolio.home',
    'portfolio.project',
    'portfolio.demo',
    'portfolio.framework',
    'portfolio.language',
    'portfolio.customer',
    'portfolio.contact'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
