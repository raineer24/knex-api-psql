"use strict";

const router = require("express").Router();
const { getBlogs, getBlog } = require("../controllers/blog_controllers");

// router
//   .route("/users/:id/projects")
//   .post(postProjects)
//   .get(getProjects);

router.route("/contents").get(getBlogs);
// .post();

// router
//   .route("/projects/:id")
//   .get(getProject)
//   .put(putProject)
//   .delete(deleteProject);

router.route("/contents/:id").get(getBlog);

module.exports = router;
