angular.module('wiltRoutes', ['ngRoute'])
//configure routes
.config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })

  .when('/javascript', {
    templateUrl: 'views/pages/javascript.html',
    controller: 'jsController',
    controllerAs: 'js'
  })

  .when('/htmlandcss', {
    templateUrl: 'views/pages/htmlandcss.html',
    controller: 'htmlcssController',
    controllerAs: 'htmlcss'
  })

  .when('/general', {
    templateUrl: 'views/pages/general.html',
    controller: 'generalController',
    controllerAs: 'general'
  })

  .when('/wtf', {
    templateUrl: 'views/pages/wtf.html',
    controller: 'wtfController',
    controllerAs: 'wtf'
  });
//set pretty urls
  $locationProvider.html5Mode(true);
});