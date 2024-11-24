
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.integer('empresa').unsigned();
      table.foreign('empresa').references('id').inTable('empresas').onUpdate('SET NULL').onDelete('SET NULL');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropForeign('empresa');
      table.dropColumn('empresa');
    })
};
