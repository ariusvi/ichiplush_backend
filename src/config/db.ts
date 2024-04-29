import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { CreateRoles1714396075567 } from "../database/migrations/1714396075567-create_roles";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "ichigo_plushies_DB",
    entities: [],
    migrations: [CreateRoles1714396075567],
    synchronize: false,
    logging: false,
});

