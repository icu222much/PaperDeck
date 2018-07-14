;(() => {
  'use strict';

  angular
    .module('paperDeckApp')
    .component('browseForm', {
      templateUrl: 'components/browse-form/browse-form.template.html',
      controller: 'BrowseFormController',
      bindings: {
        cards: '='
      }
    });
})();