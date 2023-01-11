import { IsString } from 'class-validator';
import { AgenteLocal } from 'src/typeorm';

export class CreateDevicesDto {
  @IsString()
  model: string;
  agentelocal: AgenteLocal;
}
