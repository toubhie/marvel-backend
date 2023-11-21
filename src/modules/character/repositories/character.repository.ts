import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import {
    DeepPartial,
    FindOptionsRelations,
    FindOptionsWhere,
    In,
    Repository,
    SaveOptions
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Character } from '../entities/character.entity';

@Injectable()
export class CharacterRepository {
    private logger = new Logger(CharacterRepository.name);

    constructor(@InjectRepository(Character) private readonly repository: Repository<Character>) { }

    async count(where: FindOptionsWhere<Character> = {}): Promise<number> {
        return this.repository.countBy(where);
    }

    find(where: FindOptionsWhere<Character> = {}, relations: FindOptionsRelations<Character> = {}): Promise<Character[]> {
        this.logger.debug(`Finding character where [ ${JSON.stringify(where)} ]`);

        return this.repository.find({
            where,
            relations
        });
    }

    findOne(where: FindOptionsWhere<Character> = {}, relations: FindOptionsRelations<Character> = {}): Promise<Character> {
        this.logger.debug(`Finding a character where [ ${JSON.stringify(where)} ]`);

        return this.repository.findOne({
            where,
            relations
        });
    }

    async findById(
        id: string,
        where: FindOptionsWhere<Character> = {}
    ): Promise<Character> {
        this.logger.debug(`Finding a character by id [ ${id} ]`);

        return this.repository.findOne({
            where: { id, ...where }
        });
    }

    findByIds(ids: string[], where: FindOptionsWhere<Character> = {}): Promise<Character[]> {
		this.logger.debug(`Finding characters by ids [ ${ids} ]`);

		return this.repository.find({
			where: {
				id: In(ids),
				...where
			},
			order: {
				name: 'asc'
			}
		});
	}

    saveOne(character: DeepPartial<Character>, options?: SaveOptions): Promise<Character> {
        this.logger.debug('Saving a character');

        return this.repository.save(character, options).catch((err) => {
            throw new InternalServerErrorException(err.message);
        });
    }

    updateOne(id: string, updateCharacterDto: Partial<Character>): Promise<Character> {
        this.logger.debug(`Updating a character with id: [ ${id} ]`);

        return this.repository
            .findOne({
                where: { id }
            })
            .then((character) => this.repository.merge(character, updateCharacterDto))
            .then((character) => this.repository.save(character))
            .catch((err) => {
                throw new InternalServerErrorException(err.message);
            });
    }

    async delete(id: string): Promise<any> {
        this.logger.debug(`Deleting a character [ ${id} ]`);

        return await this.repository.delete(id);
    }
}
