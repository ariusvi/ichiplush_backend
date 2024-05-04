import express from 'express';
import { createBudget, getBudget } from '../controller/budgetController';
const router = express.Router();

router.post('/new', createBudget)
router.get('/', getBudget)

export default router;