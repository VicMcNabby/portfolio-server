const projects = require('./seeds-data/projects')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE projects RESTART IDENTITY CASCADE;')
    .then(function() {
      return knex('projects').insert(projects);
    });
};
