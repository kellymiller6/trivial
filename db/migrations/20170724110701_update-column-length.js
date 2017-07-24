
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('clues', (table) => {
  		table.dropColumn('question');
  		table.dropColumn('answer');
  	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('clues', (table) => {
  		table.string('question');
  		table.string('answer');
  	})
  ])
};
