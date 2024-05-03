import express from 'express';
import { createBudget } from '../controller/budgetController';
const router = express.Router();

router.post('/new', createBudget)

export default router;