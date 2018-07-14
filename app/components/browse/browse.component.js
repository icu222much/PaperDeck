;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('browse', {
      templateUrl: 'components/browse/browse.template.html',
      controller: 'BrowseController'
    });
})();