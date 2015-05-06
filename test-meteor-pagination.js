if (Meteor.isClient) {
  Template.persons.helpers({
    persons: function() {
      return personsPagination.currentPage();
    },

    hasNext: function() {
      return personsPagination.hasNext();
    },

    pagination: function() {
      return personsPagination;
    }
  });

  Template.persons.events({
    'click #go_next': function(e) {
      if (personsPagination.hasNext())
        personsPagination.goNext();
    },

    'click #go_previous': function(e) {
      if (personsPagination.hasPrevious())
        personsPagination.goPrevious();
    }
  })
}
