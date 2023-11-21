import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";


export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'marvel_characters',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, 'src/database/migrations', '*.{ts,js}')],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: true,
  logging: true,
} as TypeOrmModuleOptions;
