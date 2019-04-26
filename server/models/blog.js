"use strict";

const createGuts = require("../helpers/model-guts");

const name = "Blog";
const tableName = "blogs";

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = ["id", "title", "describlogs"];

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  });
  return {
    ...guts
  };
};
