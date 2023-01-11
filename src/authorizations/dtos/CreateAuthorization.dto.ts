import { IsString } from 'class-validator';
import { SwHouse } from 'src/typeorm';

export class CreateAuthorizationDto {
  @IsString()
  token: string;

  valid: boolean;

  swHouse: SwHouse;
}
