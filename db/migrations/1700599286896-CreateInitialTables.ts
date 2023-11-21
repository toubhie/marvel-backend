import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1700599286896 implements MigrationInterface {
    name = 'CreateInitialTables1700599286896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "gender" character varying NOT NULL, "age" integer NOT NULL, "film_status" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character_known_accomplices_character" ("characterId_1" uuid NOT NULL, "characterId_2" uuid NOT NULL, CONSTRAINT "PK_e5a4edda36529c7543ffcf7ef3b" PRIMARY KEY ("characterId_1", "characterId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_546d961fe5f9308d8236068674" ON "character_known_accomplices_character" ("characterId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_493498693c6f7da822a12a3a05" ON "character_known_accomplices_character" ("characterId_2") `);
        await queryRunner.query(`CREATE TABLE "character_known_enemies_character" ("characterId_1" uuid NOT NULL, "characterId_2" uuid NOT NULL, CONSTRAINT "PK_264c8b60de31a26660f182cf9f2" PRIMARY KEY ("characterId_1", "characterId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8fc73b70a907127c5a291c58f0" ON "character_known_enemies_character" ("characterId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e8328e7657058fc9637fa24e8" ON "character_known_enemies_character" ("characterId_2") `);
        await queryRunner.query(`ALTER TABLE "character_known_accomplices_character" ADD CONSTRAINT "FK_546d961fe5f9308d82360686742" FOREIGN KEY ("characterId_1") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_known_accomplices_character" ADD CONSTRAINT "FK_493498693c6f7da822a12a3a050" FOREIGN KEY ("characterId_2") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_known_enemies_character" ADD CONSTRAINT "FK_8fc73b70a907127c5a291c58f0e" FOREIGN KEY ("characterId_1") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_known_enemies_character" ADD CONSTRAINT "FK_6e8328e7657058fc9637fa24e87" FOREIGN KEY ("characterId_2") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_known_enemies_character" DROP CONSTRAINT "FK_6e8328e7657058fc9637fa24e87"`);
        await queryRunner.query(`ALTER TABLE "character_known_enemies_character" DROP CONSTRAINT "FK_8fc73b70a907127c5a291c58f0e"`);
        await queryRunner.query(`ALTER TABLE "character_known_accomplices_character" DROP CONSTRAINT "FK_493498693c6f7da822a12a3a050"`);
        await queryRunner.query(`ALTER TABLE "character_known_accomplices_character" DROP CONSTRAINT "FK_546d961fe5f9308d82360686742"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e8328e7657058fc9637fa24e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8fc73b70a907127c5a291c58f0"`);
        await queryRunner.query(`DROP TABLE "character_known_enemies_character"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_493498693c6f7da822a12a3a05"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_546d961fe5f9308d8236068674"`);
        await queryRunner.query(`DROP TABLE "character_known_accomplices_character"`);
        await queryRunner.query(`DROP TABLE "character"`);
    }

}
