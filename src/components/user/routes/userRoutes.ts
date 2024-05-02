import express from 'express';
import { deleteUser, getUserProfile, getUsers, updateUsersProfile } from '../controller/userController';
const router = express.Router();

//-----USER ROUTES-----
//todo esto es una ruta de ejemplo para exportar userRoutes a server.ts
router.get('/', getUsers);
router.get('/profile' , getUserProfile);
router.put('/profile', updateUsersProfile);
router.delete('/', deleteUser);

//-----export router-----
export default router;
