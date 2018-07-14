;(() => {
  'use strict';

  const ENABLE_MOCK = false;

  function CardDataFactory($http, $q, MockFactory) {
    return {
      getCards,
      getColours,
      getSetNames,
      getTypes,
    };

    function getCards(parameters = {}) {
      if (ENABLE_MOCK) {
        return $q.resolve(MockFactory.getCards());
      }

      let promises = [];
      _createCombinationMapping(parameters).forEach(row => promises.push(_getActualCards(row)));

      return $q.all(promises).then(data => {
        let collection = [];

        data.forEach(block => {
          collection = collection.concat(block.cards);
        });

        return $q.resolve(collection);
      });
    }

    function _createCombinationMapping(parameters) {
      const defaultMax = 7;
      let combos = {};

      if (parameters.cost) {
        combos.cost = parameters.cost;
      }

      if (parameters.power) {
        combos.power = parameters.power;
      }

      if (parameters.toughness) {
        combos.toughness = parameters.toughness;
      }

      let tuples = [{}];

      for (let combo in combos) {
        let nextTuples = [];
        for (let i = (combos[combo].min || 0); i <= (combos[combo].max || defaultMax); i++) {
          nextTuples = nextTuples.concat(tuples.map(old => ({[combo]: i, ...old})));
        }
        tuples = nextTuples;
      }

      let map = [];
      tuples.forEach(tuple => map.push(_.extend({}, parameters, tuple)));

      return map;
    }

    function _getActualCards(parameters) {
      const config = {
        method: 'GET',
        url: 'https://api.magicthegathering.io/v1/cards',
        params: _mapParameters(parameters)
      };

      return $http(config).then(
        success => success.data,
        fail => fail.data
      );
    }

    function getColours() {
      return ['Black', 'Blue', 'Green', 'Red', 'White'];
    }

     function getSetNames() {
      if (ENABLE_MOCK) {
        const mock =  _
          .chain(MockFactory.getSetNames())
          .pickBy(set => set.type === 'expansion')
          .map(set => set.name)
          .sortBy()
          .value();
        return $q.resolve(mock);
      }

      const config = {
        method: 'GET',
        url: 'https://api.magicthegathering.io/v1/sets'
      };

      return $http(config).then(
        success => {
          return _
            .chain(success.data.sets)
            .pickBy(set => set.type === 'expansion')
            .map(set => set.name)
            .sortBy()
            .value();
        },
        fail => fail.data
      );      
    }

    function getTypes() {
      if (ENABLE_MOCK) {
        return $q.resolve(MockFactory.getTypes());
      }
      
      const config = {
        method: 'GET',
        url: 'https://api.magicthegathering.io/v1/types'
      };

      return $http(config).then(
        success => success.data.types,
        fail => fail.data
      );
    }

    function _mapParameters(parameters) {
      return {
        name: parameters.name,
        cmc: parameters.cost ? parseInt(parameters.cost) : null,
        colors: parameters.colors ? parameters.colors.join('|') : null,
        types: parameters.types ? parameters.types.join('|') : null,
        setName: parameters.setName ? parameters.setName.join('|') : null,
        power: parameters.power,
        toughness: parameters.toughness
      };
    }
  }

CardDataFactory.$inject = ['$http', '$q', 'MockFactory'];

  angular
    .module('paperDeckApp')
    .factory('CardDataFactory', CardDataFactory);
})();