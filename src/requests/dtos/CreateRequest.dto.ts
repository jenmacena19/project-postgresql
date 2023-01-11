import { IsString } from 'class-validator';
import { AgenteLocal, Users } from 'src/typeorm';

export class CreateRequestDto {
  @IsString()
  requestType: string;

  createAtt: string;

  params: string;

  agentelocal: AgenteLocal;

  user: Users;
}
