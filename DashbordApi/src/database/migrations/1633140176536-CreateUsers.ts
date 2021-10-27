import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1633140176536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name:'login',
                        type: 'varchar',
                    },
                    {
                        name: 'registration',
                        type: 'bigint',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'companies',
                        type: 'varchar',
                    },
                    {
                        name:'admin',
                        type: 'bit',
                        default: 0,
                    },
                    {
                        name: 'occupation',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                    }
         
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
