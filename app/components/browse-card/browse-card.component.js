;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('browseCard', {
      templateUrl: 'components/browse-card/browse-card.template.html',
      controller: 'BrowseCardController',
      bindings: {
        data: '<'
      }
    });
})();