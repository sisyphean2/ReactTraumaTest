exports.up = knex => {
  return knex.schema.createTable('surveys', table => {
    table.increments(); // creates sequential ids
    table.text('user', 128).notNullable();
    table.date('date').notNullable();
    table.integer('1').notNullable();
    table.integer('2').notNullable();
    table.integer('3').notNullable();
    table.integer('4').notNullable();
    table.integer('5').notNullable();
    table.integer('6').notNullable();
    table.integer('7').notNullable();
    table.integer('8').notNullable();
    table.integer('9').notNullable();
    table.integer('10').notNullable();
    table.integer('11').notNullable();
    table.integer('12').notNullable();
    table.integer('13').notNullable();
    table.integer('14').notNullable();
    table.integer('15').notNullable();
    table.integer('16').notNullable();
    table.integer('17').notNullable();
    table.integer('18').notNullable();
    table.integer('19').notNullable();
    table.integer('20').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('surveys');
};
