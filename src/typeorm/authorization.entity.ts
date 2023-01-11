import {
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SwHouse } from './SwHouse.entity';

@Entity()
export class Authorization {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column()
  token: string;

  @Column()
  valid: boolean;

  @ManyToOne(() => SwHouse, (swHouses) => swHouses.authorization)
  @JoinColumn({ name: 'swHouse' })
  swHouse: SwHouse;
}
