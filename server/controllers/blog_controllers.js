"use strict";

const { Blog } = require("../models");

// const getBlogs = () => {
//   Blog.findAll()
//     .then(blogs => {
//       blog.forEach(blog =>
//         console.log("blog: ", JSON.stringify(blog, null, 2))
//       );

//       return blogs;
//     })
//     .catch(err => console.log("ERROR: ", err));
// };

const getBlogs = (req, res, next) => {
  Blog.findAll()
    .then(blogs =>
      res.json({
        ok: true,
        message: "Users found",
        blogs
      })
    )
    .catch(next);
};

// const getUser = id => {
//   User.findById(id)
//     .then(user => {
//       console.log("user: ", user);

//       return user;
//     })
//     .catch(err => console.log("ERROR: ", err));
// };

const createBlog = user => {
  Blog.create(blog)
    .then(blog => {
      console.log("created blog: ", blog);

      return blog;
    })
    .catch(err => console.log("ERROR: ", err));
};

module.exports = {
  getBlogs
};
