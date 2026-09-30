import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMediaTemplateFields1790770000000 implements MigrationInterface {
  name = 'AddMediaTemplateFields1790770000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'templates',
      new (await import('typeorm')).TableColumn({
        name: 'type',
        type: 'varchar',
        length: '20',
        isNullable: false,
        default: "'text'",
      }),
    );
    await queryRunner.addColumn(
      'templates',
      new (await import('typeorm')).TableColumn({
        name: 'mediaUrl',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('templates', 'mediaUrl');
    await queryRunner.dropColumn('templates', 'type');
  }
}
