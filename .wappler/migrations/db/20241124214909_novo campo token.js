
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.string('token');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropColumn('token');
    })
};
