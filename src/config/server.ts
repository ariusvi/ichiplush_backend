import { AppDataSource } from "./db";
import express, { Application } from "express";
import dotenv from "dotenv";
import roleRoutes from "../components/role/roleRoutes";
import userRoutes from "../components/user/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

//-------HEALTH CHECK ROUTE-------
app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        });
});

//-------ROUTES-------
app.use('/api/roles', roleRoutes); //all roleRoutes
app.use('/api/users', userRoutes); //all userRoutes

//-------DATABASE CONNECTION-------
AppDataSource.initialize().then(() => {
    console.log("-------------- Database connection established --------------");

    app.listen(PORT,() => {
        console.log("=================================\n",
                    `Server is running on port: ${PORT}\n`,
                    "=================================");
    });
    
}).catch((error) => {
    console.error("Error connecting to database", error);
});


