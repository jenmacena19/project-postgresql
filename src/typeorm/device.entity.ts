import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToMany(type => AgenteLocal, id_agentelocal => id_agentelocal) id_agentelocal: AgenteLocal; 
}