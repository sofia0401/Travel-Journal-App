import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts); // url to get all posts
// router.post('/create', createPost); // url to create post

router.post('/', createPost);
export default router;