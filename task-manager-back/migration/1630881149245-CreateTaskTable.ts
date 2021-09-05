import { MigrationInterface, QueryRunner, Table } from 'typeorm';

type TaskTableName = 'Task';
const TASK_TABLE: TaskTableName = 'Task';

export class CreateTaskTable1630881149245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TASK_TABLE,
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true, length: '36' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TASK_TABLE);
  }
}
