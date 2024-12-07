const express = require('express');
const { createPost, getPosts, likePost, addComment } = require('../controllers/postController');
const router = express.Router();

// Routes pour les posts
router.post('/', createPost);
router.get('/', getPosts);
router.post('/:id/like', likePost);
router.post('/:id/comment', addComment);

module.exports = router;
