import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTitleToAddress1714745781990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("address", new TableColumn({
            name: "title",
            type: "varchar",
            length: "255",
            isNullable: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("address", "title")
    }

}
