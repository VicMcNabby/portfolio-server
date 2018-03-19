const knex = require('./knex');

module.exports = {

  getAllProjects() {
    return knex('projects');
  }
};
