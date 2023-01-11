import { Users } from './user.entity';
import {
  Column,
  Entity,
  JoinTable,
  JoinColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AgenteLocal } from './agentelocal.entity';
import { SwHouse } from './SwHouse.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'customer_id',
  })
  id: number;

  @Column()
  alias: string;

  @OneToMany(() => AgenteLocal, (agenteLocal) => agenteLocal.group, {
    eager: true,
  })
  agenteLocais: AgenteLocal[];

  @ManyToOne(() => Users, (user) => user.group)
  @JoinColumn({ name: 'user' })
  user: Users;

  @OneToMany(() => SwHouse, (id_swhouse) => id_swhouse.group, { eager: true })
  swHouses: SwHouse[];
}
