import Realm from 'realm';

let repository = new Realm({
    schema: [{
        name: 'User',
        properties: {
            id: 'string',
            name: 'string',
            email: 'string',
            urlImg: 'string'
        }
    }]
});

let UserService = {
  find: function() {
    return repository.objects('User').slice(0, 1);
  },

  save: function(user) {
    repository.write(() => {
      repository.create('User', user);
    })
  },

  update: function(user) {
    repository.write(() => {
      repository.create('User', user, true);
    });
  },

  delete: function(user){
    repository.write(() => {
      repository.delete(user);
    });
  }
};


module.exports = UserService;
