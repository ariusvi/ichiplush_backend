import express from "express";
import { Application } from "express";
import roleRoutes from "../components/role/routes/roleRoutes";
import userRoutes from "../components/user/routes/userRoutes";
import healthyRoutes from "./healthyRoutes";

export function configureRoutes(app: Application) {

    app.use('/api/healthy', healthyRoutes); 

    app.use('/api/roles', roleRoutes); //all roleRoutes
    app.use('/api/users', userRoutes); //all userRoutes
}