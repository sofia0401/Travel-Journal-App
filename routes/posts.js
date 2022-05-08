import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();
// HTTP method, specified route (endpoint) and callback (route path has to match requests to this route)

router.get('/', getPosts); // to get all posts
router.post('/create', createPost); // to create post
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;