;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('paperDeck', {
      templateUrl: 'components/paper-deck/paper-deck.template.html',
      controller: 'PaperDeckController'
    });
})();