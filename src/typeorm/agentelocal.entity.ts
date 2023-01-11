import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Device } from './device.entity';
import { Group } from './group.entity';
import { Request } from './request.entity';
import { ResponseTime } from './responsetime.entity';

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

  @Column('json', { nullable: true, default: {} })
  connectionsType: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: true,
    default: '',
    name: 'createAt',
  })
  createAtt: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: true,
    default: '',
    name: 'updateAt',
  })
  updateTime: string;

  @ManyToOne(() => Group, (group) => group.agenteLocais)
  @JoinColumn({ name: 'group' })
  group: Group;

  @OneToMany(() => Device, (device) => device.agentelocal, { eager: true })
  devices: Device[];

  @OneToMany(() => ResponseTime, (responseTime) => responseTime.agentelocal, {
    eager: true,
  })
  responseTimes: ResponseTime[];

  @OneToMany(() => Request, (request) => request.agentelocal, {
    eager: true,
  })
  request: Request[];

  @Column({
    nullable: true,
    default: '',
    name: 'firmewares',
  })
  firmeware: string;

  @Column({
    nullable: true,
    default: '',
  })
  adress: string;
}
