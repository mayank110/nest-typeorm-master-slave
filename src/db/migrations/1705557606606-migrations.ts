import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705557606606 implements MigrationInterface {
    name = 'Migrations1705557606606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "last_name" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_name"`);
    }

}
