import { Router } from "express";
import roleRoutes from "../components/role/routes/roleRoutes";
import userRoutes from "../components/user/routes/userRoutes";
import healthyRoutes from "./healthyRoutes";
import { login, register } from "../components/auth/controller/authController";
import catalogueRoutes from "../components/catalogue/routes/catalogueRoutes";

const router = Router();

    router.use('/healthy', healthyRoutes); 

    router.use('/register', register)
    router.use('/login', login)

    router.use('/roles', roleRoutes); //all roleRoutes
    router.use('/users', userRoutes); //all userRoutes
    router.use('/catalogue', catalogueRoutes)

export default router;
