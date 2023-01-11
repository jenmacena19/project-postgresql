import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Authorization } from './authorization.entity';
import { Group } from './group.entity';

@Entity()
export class SwHouse {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Group, (group) => group.swHouses)
  @JoinColumn({ name: 'group' })
  group: Group;

  @OneToMany(() => Authorization, (authorization) => authorization.swHouse, {
    eager: true,
  })
  authorization: Authorization[];
}
