import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1714410270083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "role",
                        type: "int"
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },                    
                ],
                foreignKeys: [
                    {
                        columnNames: ["role"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "roles",
                        onDelete: "CASCADE",
                    
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
