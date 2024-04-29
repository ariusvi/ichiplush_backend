import { AppDataSource } from "./db";
import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        });
})

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