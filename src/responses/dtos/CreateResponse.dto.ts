import { IsNotEmpty } from "class-validator";

export class CreateResponseDto {

    createAtt: string;

    @IsNotEmpty()
    time: number;

}