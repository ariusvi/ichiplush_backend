import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBudget1714410388182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "budget",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "reference",
                        type: "varchar",
                        length: "36",
                        isGenerated: false, 
                        isUnique: true, 
                        default: "(UUID())", 
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "base_body",
                        type: "int",
                        default: 40,
                    },
                    {
                        name: "without_face",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "animal_ears",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "wings",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "total_price",
                        type: "decimal",
                        precision: 10, // total number of digits
                        scale: 2, // number of digits after the decimal point
                        isNullable: false,
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("budget");
    }

}
