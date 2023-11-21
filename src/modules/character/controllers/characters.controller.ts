import { Controller, Param, Body, Put } from '@nestjs/common';
import { CharactersService } from '../services/characters.service';
import { UpdateAccomplicesDto } from '../dtos/update-accomplices.dto';


@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) { }

    @Put(':id/update-accomplices')
    async updateAccomplices(
        @Param('id') id: string,
        @Body() updateAccomplicesDto: UpdateAccomplicesDto,
    ): Promise<void> {
        await this.charactersService.updateAccomplices(id, updateAccomplicesDto);
    }
}
