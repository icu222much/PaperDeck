;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('deckCard', {
      templateUrl: 'components/deck-card/deck-card.template.html',
      controller: 'DeckCardController',
      bindings: {
        card: '<'
      }
    });
})();