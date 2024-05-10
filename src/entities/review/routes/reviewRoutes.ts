import express from 'express';
import { createReview, deleteReview, getUserName } from '../controller/reviewController';
import { auth } from '../../../middlewares/authMiddleware';
import { getReview } from '../controller/reviewController';
import { isSuperAdmin } from '../../../middlewares/isSuperAdminMiddleware';

const router = express.Router();

router.post('/create', auth, createReview)
router.get('/', getReview)
router.delete('/', auth, isSuperAdmin, deleteReview)
router.get('/', getUserName)

export default router;