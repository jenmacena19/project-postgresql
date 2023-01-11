import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AgenteLocal } from './agentelocal.entity';
import { Users } from './user.entity';

@Entity()
export class Request {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'customer_id',
  })
  id: number;

  @Column()
  requestType: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: '',
    name: 'createAt',
  })
  createAtt: string;

  @Column({
    type: 'json',
  })
  params: string;

  @ManyToOne(() => AgenteLocal, (agenteLocal) => agenteLocal.request)
  @JoinColumn({ name: 'agentelocal' })
  agentelocal: AgenteLocal;

  @ManyToOne(() => Users, (user) => user.request)
  @JoinColumn({ name: 'user' })
  user: Users;
}
