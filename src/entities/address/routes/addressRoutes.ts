import express from 'express';
import { createAddress, deleteAddress, getAddresses, updateAddress } from '../controller/AddressController';
import { auth } from '../../../middlewares/authMiddleware';
const router = express.Router();

router.post('/create', auth, createAddress)
router.get('/', auth, getAddresses)
router.put('/', auth, updateAddress)
router.delete('/', auth, deleteAddress)

export default router;