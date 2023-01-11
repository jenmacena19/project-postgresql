import { IsString } from "class-validator";

export class CreateCustomerDto {

    @IsString()
    so: string;

    online: boolean;

    geolocalization: string;

    connectionsType: string;

    createAtt: string;

    firmeware: string;

    adress: string;
}