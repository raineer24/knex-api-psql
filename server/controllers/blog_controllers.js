"use strict";

const { Blog } = require("../models");

const log = require("color-logs")(true, true, "Blogs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

function validBlog(blog) {
  const hasTitle = typeof blog.title === "string" && blog.title.trim() !== "";
  const hasContent =
    typeof blog.describlogs === "string" && blog.describlogs.trim() !== "";
  return hasTitle && hasContent;
}

const isValidId = (req, res, next) => {
  // if (isNaN(contentId)) {
  //   next(new Error("Invalid ID"));
  //   return next();
  // }
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
  // console.log(typeof req.params.id);
  // next();
};

const postBlogs = (req, res, next) => {
  const props = req.body;
  console.log(req.file);

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

  // log.info(contentId);
  // if (isNaN(contentId)) {
  //   next(new Error("Invalid ID"));
  //   return next();
  // }

  Blog.findById(contentId)
    .then(content => res.json({ ok: true, mesage: "Content found", content }))
    .catch(next);
};

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

const deleteBlog = (req, res, next) => {
  const contentId = req.params.id;

  Blog.destroy(contentId)
    .then(deleteCount =>
      res.json({
        ok: true,
        message: `Blog '${contentId}' deleted`,
        deleteCount
      })
    )
    .catch(next);
};

module.exports = {
  postBlogs,
  getBlogs,
  getBlog,
  putBlog,
  deleteBlog,
  isValidId
};
