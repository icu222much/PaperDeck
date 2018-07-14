;(() => {
  'use strict';

  function BrowseFormController(CardDataFactory) {

    this.parameters = {};

    CardDataFactory.getTypes().then(response => {
      this.types = response;
    });

    CardDataFactory.getSetNames().then(response => {
      this.sets = response;
    });

    this.colours = CardDataFactory.getColours();

    this.onResetClick = () => this.parameters = {};

    this.onSearchClick = () => {
      CardDataFactory.getCards(this.parameters).then(response => {
        this.cards = response;
      });
    };
  }

  BrowseFormController.$inject = ['CardDataFactory'];

  angular
    .module('paperDeckApp')
    .controller('BrowseFormController', BrowseFormController);
})();