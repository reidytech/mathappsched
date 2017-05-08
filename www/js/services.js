angular.module('mathApp.services', [])

.factory('AgendaIDs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var agendas = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/practice.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/practice.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/practice.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/practice.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/practice.png'
  }];

  return {
    all: function() {
      return agendas;
    },
    remove: function(agenda) {
      agendas.splice(agendas.indexOf(agenda), 1);
    },
    get: function(agendaId) {
      for (var i = 0; i < agendas.length; i++) {
        if (agendas[i].id === parseInt(agendaId)) {
          return agendas[i];
        }
      }
      return null;
    }
  };
});
