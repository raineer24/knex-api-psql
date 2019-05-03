"use strict";

const { Blog } = require("../models");

const log = require("color-logs")(true, true, "Blogs");

function validBlog(blog) {
  const hasTitle = typeof blog.title === "string" && blog.title.trim() !== "";
  const hasContent =
    typeof blog.describlogs === "string" && blog.describlogs.trim() !== "";
  return hasTitle && hasContent;
}

const postBlogs = (req, res, next) => {
  const props = req.body;

  if (validBlog(props)) {
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
  } else {
    next(new Error("Invalid Blog"));
  }
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
  console.log(typeof contentId);

  log.info(contentId);
  if (isNaN(contentId)) {
    next(new Error("Invalid ID"));
    return next();
  }

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

// const createBlog = user => {
//   Blog.create(blog)
//     .then(blog => {
//       console.log("created blog: ", blog);

//       return blog;
//     })
//     .catch(err => console.log("ERROR: ", err));
// };

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

  log.info(contentId);
  if (isNaN(contentId)) {
    next(new Error("Invalid ID"));
    return next();
  }

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
