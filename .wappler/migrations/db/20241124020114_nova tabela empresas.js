
exports.up = function(knex) {
  return knex.schema
    .createTable('empresas', async function (table) {
      table.increments('id');
      table.string('nome');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('empresas')
};
