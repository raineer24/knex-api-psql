exports.up = knex => {
  return knex.schema.createTable("blogs", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("title");
    t.string("describlogs");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("blogs");
};
