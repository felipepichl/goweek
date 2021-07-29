import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveFileFieldToBoxes1627520689229
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('boxes', 'file');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'boxes',
      new TableColumn({
        name: 'file',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }
}
