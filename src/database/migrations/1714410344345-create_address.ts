import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1714410344345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "surname",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "street",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "country",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "postal_code",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "is_default",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        onDelete: "CASCADE",
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address");
    }

}
