;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('print', {
      templateUrl: 'components/print/print.template.html',
      controller: 'PrintController'
    });
})();