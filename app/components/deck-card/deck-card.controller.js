;(() => {
  'use strict';

  const CARD_HEIGHT = 310;

  function DeckCardController($window, $element, DeckFactory) {
    this.addCard = () => DeckFactory.addCard(this.card);
    this.removeCard = () => DeckFactory.removeCard(this.card);
    this.getType = type => DeckFactory.getCardsWithType(type);

    this.updateVerticalPosition = $event => {
      const windowHeight = $window.innerHeight;
      const mouseY = $event.y;
      let y;

      if (mouseY < (CARD_HEIGHT / 2)) {
        y = 0;
      } else if (mouseY > windowHeight - (CARD_HEIGHT / 2)) {
        y = windowHeight - CARD_HEIGHT;
      } else {
        y = mouseY - (CARD_HEIGHT / 2);
      }

      this.verticalPosition = { 'top': y + 'px' };
    };
  }

  DeckCardController.$inject = ['$window', '$element', 'DeckFactory'];

  angular
    .module('paperDeckApp')
    .controller('DeckCardController', DeckCardController);
})();