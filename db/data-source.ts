import { DataSourceOptions, DataSource } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'marvel_characters',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*.js}']
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;