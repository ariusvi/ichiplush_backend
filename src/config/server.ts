import { AppDataSource } from "./db";
import express from "express";
import dotenv from "dotenv";
import { configureRoutes } from "../routes/routes";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

// //-------HEALTHY CHECK ROUTE-------
// app.get('/healthy', (req, res) => {
//     res.status(200).json(
//         {
//             success: true,
//             message: "Server is healthy"
//         });
// });


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

configureRoutes(app);
