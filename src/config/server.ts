import { AppDataSource } from "./db";
import express, { Application } from "express";

const app: Application = express();

app.listen(4000,() => {
    console.log("Server is running on port 4000");
});

// AppDataSource.initialize().then(() => {
//     console.log("===============================",
//                 "Database connection established",
//                 "===============================");
// }).catch((error) => {
//     console.error("Error connecting to database", error);
// });