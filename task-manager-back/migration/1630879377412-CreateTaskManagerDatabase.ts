import { MigrationInterface, QueryRunner } from 'typeorm';

type taskmanagerDbName = 'taskmanager';
const TASKMANAGER: taskmanagerDbName = 'taskmanager';

export class CreateTaskManagerDatabase1630879377412
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hasDatabase = await queryRunner.hasDatabase(TASKMANAGER);
    await queryRunner.createDatabase(TASKMANAGER, hasDatabase);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase(TASKMANAGER);
  }
}
