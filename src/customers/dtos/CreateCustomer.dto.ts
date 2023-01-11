import { IsString } from 'class-validator';
import { Group } from 'src/typeorm';

export class CreateCustomerDto {
  @IsString()
  so: string;

  online: boolean;

  geolocalization: string;

  connectionsType: string;

  createAtt: string;

  firmeware: string;

  adress: string;

  group: Group;
}
