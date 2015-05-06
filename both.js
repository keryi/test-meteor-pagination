Persons = new Mongo.Collection('persons');
personsPagination = new Pagination(Persons, {perPage: 10});
