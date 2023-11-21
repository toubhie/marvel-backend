import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateAccomplicesDto {
    @IsUUID()
    characterId: string;

    @IsNotEmpty()
    @IsArray()
    accomplices: string[];
}
