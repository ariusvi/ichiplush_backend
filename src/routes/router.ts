import { Router } from "express";
import roleRoutes from "../entities/role/routes/roleRoutes";
import userRoutes from "../entities/user/routes/userRoutes";
import healthyRoutes from "./healthyRoutes";
import { login, register } from "../entities/auth/controller/authController";
import catalogueRoutes from "../entities/catalogue/routes/catalogueRoutes";
import addressRoutes from "../entities/address/routes/addressRoutes";
import budgetRoutes from "../entities/budget/routes/budgetRoutes";
import orderRoutes from "../entities/orders/routes/orderRoutes";
import reviewRoutes from "../entities/review/routes/reviewRoutes";

const router = Router();

    router.use('/healthy', healthyRoutes); 

    router.use('/register', register)
    router.use('/login', login)

    router.use('/roles', roleRoutes); 
    router.use('/users', userRoutes); 
    router.use('/catalogue', catalogueRoutes)
    router.use('/address', addressRoutes)
    router.use('/budget', budgetRoutes)
    router.use('/order', orderRoutes)
    router.use('/review', reviewRoutes)

export default router;
