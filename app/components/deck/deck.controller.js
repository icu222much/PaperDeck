;(() => {
  'use strict';

  function DeckController(DeckFactory) {
    this.sortOrder = 'name';
    this.cards = DeckFactory.getDeck();
    this.types = ['Creature', 'Spell', 'Land'];
    this.sortingOptions = [
      { value: 'name', text: 'A to Z' },
      { value: '-name', text: 'Z to A' },
      { value: '-cmc', text: 'Highest mana cost' },
      { value: 'cmc', text: 'Lowest mana cost' },
      { value: '-power', text: 'Most power' },
      { value: 'power', text: 'Least power' },
      { value: '-toughness', text: 'Most toughness' },
      { value: 'toughness', text: 'Least toughness' }
    ];

    this.isType = (type, card) => DeckFactory.isType(type, card);
    this.getTypeCount = type => DeckFactory.getTypeCount(type);
    this.numOfCards = () => DeckFactory.getNumberOfCardsInDeck();
    this.onPrintClick = () => window.print();
  }

  DeckController.$inject = ['DeckFactory'];

  angular
    .module('paperDeckApp')
    .controller('DeckController', DeckController);
})();