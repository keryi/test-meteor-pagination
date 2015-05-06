if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Persons.find().count() <= 0) {
      _.times(100, function(i) {
        Persons.insert({
          name: "Person#" + i,
          score: _.random(99)
        });
      });
    }
  });
}
