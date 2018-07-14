;(() => {
  'use strict';

  const CARD_WIDTH = 233;
  const PADDING = 10;

  function BrowseController($window, DeckFactory) {

    this.$onInit = () => matchResultsWidth.apply(this);

    this.sortOrder = 'name';

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

    this.deck = DeckFactory.getDeck();

    angular.element($window).bind('resize', matchResultsWidth.bind(this));
  }

  function matchResultsWidth() {
    const contentWidth = angular.element(document.querySelector('.js-browse'))[0].clientWidth;    
    const maxAllowedWidth = Math.floor(contentWidth / CARD_WIDTH) * CARD_WIDTH - PADDING;
    this.width = { 'width': maxAllowedWidth + 'px' };
  }

  BrowseController.$inject = ['$window', 'DeckFactory'];

  angular
    .module('paperDeckApp')
    .controller('BrowseController', BrowseController);
})();