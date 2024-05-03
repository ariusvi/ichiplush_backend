import { Router } from "express";
import roleRoutes from "../components/role/routes/roleRoutes";
import userRoutes from "../components/user/routes/userRoutes";
import healthyRoutes from "./healthyRoutes";
import { login, register } from "../components/auth/controller/authController";
import catalogueRoutes from "../components/catalogue/routes/catalogueRoutes";
import addressRoutes from "../components/address/routes/addressRoutes";
import budgetRoutes from "../components/budget/routes/budgetRoutes";

const router = Router();

    router.use('/healthy', healthyRoutes); 

    router.use('/register', register)
    router.use('/login', login)

    router.use('/roles', roleRoutes); 
    router.use('/users', userRoutes); 
    router.use('/catalogue', catalogueRoutes)
    router.use('/address', addressRoutes)
    router.use('/budget', budgetRoutes)

export default router;
