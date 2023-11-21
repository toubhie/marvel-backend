import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './modules/character/characters.module';
import { config } from './config/orm.config';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    CharactersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}