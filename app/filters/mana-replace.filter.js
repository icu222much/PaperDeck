;(() => {
  'use strict';

  function manaReplaceFilter() {
    return (input = '') => {
      return input
        .replace(new RegExp('\{B\}', 'g'), generateColourElement('black'))
        .replace(new RegExp('\{U\}', 'g'), generateColourElement('blue'))
        .replace(new RegExp('\{G\}', 'g'), generateColourElement('green'))
        .replace(new RegExp('\{R\}', 'g'), generateColourElement('red'))
        .replace(new RegExp('\{W\}', 'g'), generateColourElement('white'))
        .replace(/\{(\d+)\}/g, generateNumberElement('$1'));
    };
  }

  function generateColourElement(colour) {
    return `<span class="icon mtg-${colour}"></span>`;
  }

  function generateNumberElement(number) {
    return `<span>${number}</span>`;
  }

  angular
    .module('paperDeckApp')
    .filter('manaReplace', manaReplaceFilter);
})();