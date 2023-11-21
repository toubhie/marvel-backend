import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { CharactersService } from './services/characters.service';
import { CharactersController } from './controllers/characters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService],
  controllers: [CharactersController],
})

export class CharactersModule {}
