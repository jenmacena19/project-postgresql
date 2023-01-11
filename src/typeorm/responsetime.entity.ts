import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AgenteLocal } from './agentelocal.entity';

@Entity()
export class ResponseTime {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'response_id',
  })
  id: number;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: '',
    name: 'createAt',
  })
  createAtt: string;

  @Column()
  time: number;

  @ManyToOne(() => AgenteLocal, (agentelocal) => agentelocal.responseTimes)
  @JoinColumn({ name: 'agentelocal' })
  agentelocal: AgenteLocal;
}
