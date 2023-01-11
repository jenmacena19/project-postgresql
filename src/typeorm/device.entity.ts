import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AgenteLocal } from './agentelocal.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  model: string;

  @ManyToOne(() => AgenteLocal, (agentelocal) => agentelocal.devices)
  @JoinColumn({ name: 'AgenteLocal' })
  agentelocal: AgenteLocal;
}
