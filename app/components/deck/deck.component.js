;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('deck', {
      templateUrl: 'components/deck/deck.template.html',
      controller: 'DeckController'
    });
})();