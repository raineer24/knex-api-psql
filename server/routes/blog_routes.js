"use strict";

const router = require("express").Router();
const { getBlogs } = require("../controllers/blog_controllers");

// router
//   .route("/users/:id/projects")
//   .post(postProjects)
//   .get(getProjects);

router.route("/contents").get(getBlogs);

// router
//   .route("/projects/:id")
//   .get(getProject)
//   .put(putProject)
//   .delete(deleteProject);

module.exports = router;
