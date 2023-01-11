import { IsString } from "class-validator";

export class CreateDevicesDto {

    @IsString()
    model: string;
}