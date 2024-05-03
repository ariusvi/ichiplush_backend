import express from 'express';
import { createAddress } from '../controller/AddressController';
import { auth } from '../../../middlewares/authMiddleware';
const router = express.Router();

router.post('/create', auth, createAddress)

export default router;