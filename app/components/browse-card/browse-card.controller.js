;(() => {
  'use strict';

  function BrowseCardController(DeckFactory) {
    this.addCard = () => DeckFactory.addCard(this.data);
    this.removeCard = () => DeckFactory.removeCard(this.data);
  }

  BrowseCardController.$inject = ['DeckFactory'];

  angular
    .module('paperDeckApp')
    .controller('BrowseCardController', BrowseCardController);
})();