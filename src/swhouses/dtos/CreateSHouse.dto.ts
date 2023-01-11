import { IsString } from "class-validator";

export class CreateSHouseDto {

    @IsString()
    name: string;

    email: string;
}