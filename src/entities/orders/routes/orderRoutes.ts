import express from 'express';
import { createOrder, getOrder, updateOrder } from '../controller/orderController';
import { auth } from '../../../middlewares/authMiddleware';
import { isSuperAdmin } from '../../../middlewares/isSuperAdminMiddleware';

const router = express.Router();

router.post('/create', auth, createOrder)
router.get('/' , auth, getOrder)
router.put("/update", auth, isSuperAdmin, updateOrder)


export default router;