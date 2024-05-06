import express from 'express';
import { createReview } from '../controller/reviewController';
import { auth } from '../../../middlewares/authMiddleware';
import { getReview } from '../controller/reviewController';

const router = express.Router();

router.post('/create', auth, createReview)
router.get('/', getReview)

export default router;