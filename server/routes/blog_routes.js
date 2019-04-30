"use strict";

const router = require("express").Router();
const {
  getBlogs,
  getBlog,
  putBlog,
  postBlogs
} = require("../controllers/blog_controllers");

// router
//   .route("/users/:id/projects")
//   .post(postProjects)
//   .get(getProjects);

router
  .route("/contents")
  .post(postBlogs)
  .get(getBlogs);
// .post();

// router
//   .route("/projects/:id")
//   .get(getProject)
//   .put(putProject)
//   .delete(deleteProject);

router
  .route("/contents/:id")
  .get(getBlog)
  .put(putBlog);

module.exports = router;
