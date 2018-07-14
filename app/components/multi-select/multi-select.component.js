;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('multiSelect', {
      templateUrl: 'components/multi-select/multi-select.template.html',
      controller: 'MultiSelectController'
    });
})();