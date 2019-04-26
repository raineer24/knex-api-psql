"use strict";

const name = "Blog";
const tableName = "blogs";

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = ["id", "title", "describlogs"];

module.exports = knex => {
  const create = props =>
    knex
      .insert(props)
      .into(tableName)
      .timeout(1000)

      .catch(err => err);

  const findAll = () =>
    knex
      .select()
      .from(tableName)
      .timeout(1000)
      .catch(err => err);

  const find = filters =>
    knex
      .select(selectableProps)
      .from(tableName)
      .where(filters)
      .timeout(1000)
      .catch(err => err);

  const findById = id =>
    knex
      .select(selectableProps)
      .from(tableName)
      .where({ id })
      .timeout(1000)
      .catch(err => err);

  // TODO: handle updating password
  const update = props =>
    beforeSave(props)
      .then(user =>
        knex
          .update(user)
          .from(tableName)
          .where({ id })
      )
      .catch(err => err);

  const destroy = id =>
    knex
      .del()
      .from(tableName)
      .where({ id })
      .catch(err => err);

  return {
    name,
    tableName,
    create,
    findAll
  };
};
