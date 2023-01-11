import { IsString } from 'class-validator';
import { Users } from 'src/typeorm';

export class CreateGroupDto {
  @IsString()
  alias: string;
  user: Users;
}
