;(() => {
  'use strict';

  angular
    .module('paperDeckApp', ['ui.router', 'ui.select'])
    .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $stateProvider
        .state('home', {
          url: '/',
          component: 'paperDeck'
        });
    }]);
})();