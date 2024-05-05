import express from 'express';
import { createReview } from '../controller/reviewController';
import { auth } from '../../../middlewares/authMiddleware';

const router = express.Router();

router.post('/create', auth, createReview)

export default router;