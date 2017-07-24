exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('clues', (table) => {
  		table.string('question', 1000);
  		table.string('answer', 1000);
  	})
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.table('clues', (table) => {
  		table.dropColumn('question');
  		table.dropColumn('answer');
  	})
  ])
};