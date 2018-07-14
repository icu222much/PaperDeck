;(() => {
  'use strict';

  function PrintController(DeckFactory) {
    this.cards = DeckFactory.getDeck();
    this.getCount = card => new Array(card.count);
  }

  PrintController.$inject = ['DeckFactory'];

  angular
    .module('paperDeckApp')
    .controller('PrintController', PrintController);
})();