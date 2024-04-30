import { AppDataSource } from "./db";
import express from "express";
import dotenv from "dotenv";
import router from "../routes/router";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', router)

const PORT = process.env.PORT || 4001;


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


