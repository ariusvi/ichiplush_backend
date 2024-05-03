import express from 'express';
import { createAddress, getAddresses } from '../controller/AddressController';
import { auth } from '../../../middlewares/authMiddleware';
const router = express.Router();

router.post('/create', auth, createAddress)
router.get('/', auth, getAddresses)

export default router;