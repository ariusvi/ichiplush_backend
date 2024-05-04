import express from 'express';
import { createBudget, getBudget } from '../controller/budgetController';
import { auth } from '../../../middlewares/authMiddleware';
const router = express.Router();

router.post('/new', createBudget)
router.get('/', auth, getBudget)


export default router;