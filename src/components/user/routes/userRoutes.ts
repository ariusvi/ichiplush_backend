import express from 'express';
import { deleteUser, getUserProfile, getUsers, updateUsersProfile } from '../controller/userController';
import { isSuperAdmin } from '../../../middlewares/isSuperAdminMiddleware';
import { auth } from '../../../middlewares/authMiddleware';
const router = express.Router();

//-----USER ROUTES-----
//todo esto es una ruta de ejemplo para exportar userRoutes a server.ts
router.get('/', auth, isSuperAdmin, getUsers);
router.get('/profile' , auth, getUserProfile);
router.put('/profile', auth, updateUsersProfile);
router.delete('/', auth, isSuperAdmin, deleteUser);

//-----export router-----
export default router;
