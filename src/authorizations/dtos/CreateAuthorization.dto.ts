import { IsString } from "class-validator";

export class CreateAuthorizationDto {

    @IsString()
    token: string;

    valid: boolean;
}