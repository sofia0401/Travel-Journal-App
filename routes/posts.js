import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();
// HTTP method, specified route (endpoint) and callback (route path has to match requests to this route)

router.get('/', getPosts); // to get all posts
router.post('/create', auth, createPost); // to create post

router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;