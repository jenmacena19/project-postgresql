import { IsString } from "class-validator";

export class CreateRequestDto {

    @IsString()
    requestType: string;

    createAtt: string;

    params: string;
}