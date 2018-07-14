;(() => {
  'use strict';

  const TYPES = {
    CREATURE: 'Creature',
    LAND: 'Land',
    SPELL: 'Spell'
  };

  function DeckFactory() {
    const deck = [];

    return {
      addCard,
      removeCard,
      getDeck,
      getCardsWithType,
      getTypeCount,
      getNumberOfCardsInDeck,
      isCreature,
      isLand,
      isSpell,
      isType
    };

    function addCard(card) {
      const cardInDeck = _.find(deck, deckCard => deckCard.id === card.id);

      if (cardInDeck) {
        cardInDeck.count++;
      } else {
        card.count = 1;
        deck.push(card);
      }
    }

    function removeCard(card) {
      if (card.count) {
        card.count--;
        card.count < 1 ? _.remove(deck, deckCard => deckCard.id === card.id) : null;  
      }
    }

    function getDeck() {
      return deck;
    }

    function getCardsWithType(type) {
      return _.find(deck, card => card.types[0] === type);
    }

    function getTypeCount(type) {
      let count = 0;
      let isType;
      
      if (type === TYPES.CREATURE) {
        isType = isCreature;
      } else if (type === TYPES.LAND) {
        isType = isLand;
      } else {
        isType = isSpell;
      }

      _.find(deck, card => {
        count = isType(card) ? count + card.count : count;
      });

      return count;
    }

    function getNumberOfCardsInDeck() {
      let count = 0;
      _.forEach(deck, card => count = count + card.count);
      return count;
    }

    function isCreature(card) {
      return !!(card.types.indexOf(TYPES.CREATURE) + 1);
    }

    function isLand(card) {
      return !!(card.types.indexOf(TYPES.LAND) + 1);
    }

    function isSpell(card) {
      return !isCreature(card) && !isLand(card);
    }

    function isType(type, card) {
      if (type === TYPES.CREATURE) {
        return isCreature(card);
      } else if (type === TYPES.LAND) {
        return isLand(card);
      } else if (type === TYPES.SPELL) {
        return isSpell(card);
      }
    }
  }

  DeckFactory.$inject = [];

  angular
    .module('paperDeckApp')
    .factory('DeckFactory', DeckFactory);
})();