exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('screenshot').notNullable();
    table.text('description').notNullable();
    table.text('url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
