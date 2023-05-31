const express = require("express");
const { protect } = require("../middleware/auth-middleware");

const router = express.Router();
const { register, login } = require("../controllers/auth-controller");
const {
  createPost,
  getAllPosts,
  vote,
  savePost,
  getUser,
  getOnePost,
  getOneSubCategory,
  getSavedPosts,
  getSubmittedPosts,
  getSearchedPost,
  getPopular,
} = require("../controllers/post-controller");

const {
  createCategory,
  createSubcategory,
  getAllCategories,
  getAllSubcategories,
} = require("../controllers/category-controller");

const {
  createComment,
  getComments,
  commentVote,
} = require("../controllers/comment-controller");

const { createBlog, getAllBlogs } = require("../controllers/blog-controller");
const { createDirectory, getAllDirectories } = require("../controllers/directory-controller");

router.post("/login", login);
router.post("/register", register);
router.post("/createPost", protect, createPost);
router.post("/createCategory", createCategory);
router.post("/createSubcategory", protect, createSubcategory);
router.post("/createComment", protect, createComment);
router.post("/blog/create", createBlog);
router.post("/directory/create", createDirectory);

router.get("/", getAllPosts);
router.get("/posts/:sortType", getAllPosts);
router.get("/categories", getAllCategories);
router.get("/subcategories", getAllSubcategories);
router.get("/user", protect, getUser);
router.get("/savedPosts", protect, getSavedPosts);
router.get("/submittedPosts", protect, getSubmittedPosts);
router.get("/post/:postId", getOnePost);
router.get("/sub/:subcategory", getOneSubCategory);
router.get("/comments/:postId", getComments);
router.get("/search/:query", getSearchedPost);
router.get("/blog", getAllBlogs)
router.get("/directory", getAllDirectories);

router.put("/vote", protect, vote);
router.put("/commentVote", protect, commentVote);
router.put("/savePost", protect, savePost);
// router.put("/users/:userId", editUser)

module.exports = router;
