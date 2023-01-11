import { IsNotEmpty } from 'class-validator';
import { AgenteLocal } from 'src/typeorm';

export class CreateResponseDto {
  createAtt: string;
  @IsNotEmpty()
  time: number;
  agentelocal: AgenteLocal;
}
