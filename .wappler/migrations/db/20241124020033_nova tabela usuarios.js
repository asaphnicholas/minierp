
exports.up = function(knex) {
  return knex.schema
    .createTable('usuarios', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('funcao');
      table.string('email');
      table.string('celular');
      table.string('senha');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('usuarios')
};
