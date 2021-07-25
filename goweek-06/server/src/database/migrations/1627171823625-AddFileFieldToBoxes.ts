import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFileFieldToBoxes1627171823625
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'boxes',
      new TableColumn({
        name: 'file',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('boxes', 'file');
  }
}
