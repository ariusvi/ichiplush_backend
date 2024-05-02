import express from 'express';
import { deleteUser, getUserProfile, getUsers, updateUsersProfile } from '../controller/userController';
const router = express.Router();

//-----USER ROUTES-----
//todo esto es una ruta de ejemplo para exportar userRoutes a server.ts
router.get('/users', getUsers);
router.get('/user/profile' , getUserProfile);
router.put('/user/profile', updateUsersProfile);
router.delete('/user', deleteUser);

//-----export router-----
export default router;
