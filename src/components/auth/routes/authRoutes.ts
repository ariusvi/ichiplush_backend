import express from 'express';
import { login, register } from '../controller/authController';

const router = express.Router();

//-----AUTH ROUTES-----
router.post('/register', register)
router.post('/login', login)

//-----export router-----
export default router;
