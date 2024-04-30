import express, { Router } from "express";
import { Application } from "express";
import roleRoutes from "../components/role/routes/roleRoutes";
import userRoutes from "../components/user/routes/userRoutes";
import healthyRoutes from "./healthyRoutes";

const router = Router();

    router.use('/api/healthy', healthyRoutes); 

    

    router.use('/api/roles', roleRoutes); //all roleRoutes
    router.use('/api/users', userRoutes); //all userRoutes

export default router;