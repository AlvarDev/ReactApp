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
  findAll: function() {
    return repository.objects('User');
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
  }
};


module.exports = UserService;
