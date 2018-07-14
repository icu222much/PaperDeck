;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('printCard', {
      templateUrl: 'components/print-card/print-card.template.html',
      controller: 'PrintCardController',
      bindings: {
        card: '<'
      }
    });
})();