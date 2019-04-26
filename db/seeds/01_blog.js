"use strict";

const { Blog } = require("../../server/models");

exports.seed = (knex, Promise) =>
  knex(Blog.tableName)
    .del()
    .then(() => [
      {
        title: "avengers end game",
        describlogs: "the last sage"
      },
      {
        title: "muro ami",
        describlogs: "little mermaid"
      }
    ])
    .then(newBlogs => Promise.all(newBlogs.map(blog => Blog.create(blog))))
    .catch(err => console.log("err: ", err));
