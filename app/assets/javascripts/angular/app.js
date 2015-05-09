angular
.module('Angplate', [
  'ngRoute',
  'templates'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    });
  $locationProvider.html5Mode(false);
});
