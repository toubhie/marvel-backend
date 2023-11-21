import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from '../entities/character.entity';
import { UpdateAccomplicesDto } from '../dtos/update-accomplices.dto';
import { CharacterRepository } from '../repositories/character.repository';

@Injectable()
export class CharactersService {
    constructor(
        @InjectRepository(Character) private readonly characterRepository: CharacterRepository,
    ) { }

    async updateAccomplices(characterId: string, updateAccomplicesDto: UpdateAccomplicesDto): Promise<void> {
        const character = await this.characterRepository.findOne({ id: characterId });

        character.knownAccomplices = await this.characterRepository.findByIds(updateAccomplicesDto.accomplices);

        await this.characterRepository.saveOne(character);
    }
}
