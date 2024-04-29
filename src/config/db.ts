import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { CreateRoles1714396075567 } from "../database/migrations/1714396075567-create_roles";
import { CreateCatalogue1714397270757 } from "../database/migrations/1714397270757-create_catalogue";
import { CreateUsers1714410270083 } from "../database/migrations/1714410270083-create_users";
import { CreateAddress1714410344345 } from "../database/migrations/1714410344345-create_address";
import { CreateBudget1714410388182 } from "../database/migrations/1714410388182-create_budget";
import { CreateOrders1714410455095 } from "../database/migrations/1714410455095-create_orders";
import { CreateReviews1714416306946 } from "../database/migrations/1714416306946-create_reviews";
;


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "ichigo_plushies_DB",
    entities: [],
    migrations: [
        CreateRoles1714396075567,
        CreateCatalogue1714397270757,
        CreateUsers1714410270083,
        CreateAddress1714410344345,
        CreateBudget1714410388182,
        CreateOrders1714410455095,
        CreateReviews1714416306946,
    ],
    synchronize: false,
    logging: false,
});

