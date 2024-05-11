import express from 'express';
import { createOrder, getAllOrders, getOrders, updateOrder } from '../controller/orderController';
import { auth } from '../../../middlewares/authMiddleware';
import { isSuperAdmin } from '../../../middlewares/isSuperAdminMiddleware';

const router = express.Router();

router.post('/create', auth, createOrder)
router.get('/admin' , auth, isSuperAdmin, getAllOrders)
router.put("/update", auth, isSuperAdmin, updateOrder)
router.get('/', auth, getOrders)


export default router;