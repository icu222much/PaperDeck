;(() => {
  'use strict';

  function StringReplaceFilter() {
    return (input = '', from = '', to = '') => input.replace(new RegExp(from, 'g'), to);
  }

  angular
    .module('paperDeckApp')
    .filter('stringReplace', StringReplaceFilter);
})();