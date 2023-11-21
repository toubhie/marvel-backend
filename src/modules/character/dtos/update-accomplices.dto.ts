import { IsArray, IsNotEmpty } from 'class-validator';

export class UpdateAccomplicesDto {
    @IsNotEmpty()
    @IsArray()
    accomplices: string[];
}
