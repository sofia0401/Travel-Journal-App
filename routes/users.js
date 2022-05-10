import express from 'express';

import { signIn, signUp } from '../controllers/users.js';

const router = express.Router();
// HTTP method, specified route (endpoint) and callback (route path has to match requests to this route)

router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;