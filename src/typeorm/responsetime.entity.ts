import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(type => AgenteLocal, id_agentelocal => id_agentelocal) id_agentelocal: AgenteLocal; 

  
}