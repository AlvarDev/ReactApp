import Realm from 'realm';
// import PlaceModel from './models/PlaceModel';

let repository = new Realm({
    schema: [{
        name: 'Place',
        properties: {
            urlImage: 'string',
            name: 'string',
            address: 'string',
            lat: 'double',
            lng: 'double'
        }
    }]
});

let PlaceService = {
  findAll: function() {
    return repository.objects('Place');
  },

  save: function(place) {
    repository.write(() => {
      repository.create('Place', place);
    })
  },

  update: function(todo) {
    repository.write(() => {
      repository.create('Place', place, true);
    });
  }
};


module.exports = PlaceService;
