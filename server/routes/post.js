import express from 'express';
import { createPost, getPosts } from '../controllers/post';

const router = express.Router();

router.route('/').post(createPost).get(getPosts);

export default router;
