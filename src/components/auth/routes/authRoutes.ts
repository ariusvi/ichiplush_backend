import express from 'express';
import { register } from '../controller/authController';

const router = express.Router();

//-----AUTH ROUTES-----
router.post('/register', register)

//-----export router-----
export default router;
