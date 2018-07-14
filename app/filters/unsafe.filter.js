;(() => {
  'use strict';

  function UnsafeFilter($sce) {
    return (input = '') => $sce.trustAsHtml(input);
  }

  UnsafeFilter.$inject = ['$sce'];

  angular
    .module('paperDeckApp')
    .filter('unsafe', UnsafeFilter);
})();