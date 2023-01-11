import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class AgenteLocal {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id_agent',
  })
  id: number;

  @Column()
  so: string;

  @Column()
  online: boolean;

  @Column()
  geolocalization: string;
  
  @Column('json', { nullable: false, default: {} })
  connectionsType: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: '',
    name: 'createAt',
  })
  createAtt: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: '',
    name: 'updateAt',
  })
  updateTime: string;

  @Column({
    nullable: false,
    default: '',
    name: 'firmewares',
  })
  firmeware: string;

  @Column({
    nullable: false,
    default: ''
  })
  adress: string;

}