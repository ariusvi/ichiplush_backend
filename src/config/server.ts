import { AppDataSource } from "./db";
import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log("=================================\n",
                `Server is running on port: ${PORT}\n`,
                "=================================");
});

// AppDataSource.initialize().then(() => {
//     console.log("===============================",
//                 "Database connection established",
//                 "===============================");
// }).catch((error) => {
//     console.error("Error connecting to database", error);
// });