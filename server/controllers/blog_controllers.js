"use strict";

const { Blog } = require("../models");

const log = require("color-logs")(true, true, "Blogs");

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

const postBlogs = (req, res, next) => {
  const props = req.body;

  Blog.create(props)
    .then(
      content => {
        return res.json({
          content,
          message: "Saved"
        });
      }
      // props => log.info(props),
      // res.json({
      //   ok: true,
      //   message: "Blog created",
      //   props
      // })
    )
    .catch(next);
};

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

const getBlog = (req, res, next) => {
  const contentId = req.params.id;

  Blog.findById(contentId)
    .then(content => res.json({ ok: true, mesage: "Content found", content }))
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

// const putBlog = (req, res, next) => {
//   const contentId = req.params.id;
//   const props = req.body.user;

//   Blog.update(contentId, props).then(updateContent =>
//     Promise.all([updateContent, Blog.findById(contentId)])
//       .then(([updateContent, content]) =>
//         res.json({
//           ok: true,
//           message: "Content Updated",
//           content,
//           updateContent
//         })
//       )
//       .catch(next)
//   );
// };

const putBlog = (req, res, next) => {
  const contentId = req.params.id;
  const props = req.body;
  console.log(props);

  Blog.update(contentId, props)
    .then(
      props => log.info(`log.info : ${props}`),
      res.json({
        ok: true,
        message: "Content Updated",
        props
      })
    )
    .catch(next);
};

module.exports = {
  postBlogs,
  getBlogs,
  getBlog,
  putBlog
};
