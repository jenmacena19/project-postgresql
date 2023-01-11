import { IsString } from 'class-validator';
import { Group } from 'src/typeorm';

export class CreateSHouseDto {
  @IsString()
  name: string;

  email: string;

  group: Group;
}
