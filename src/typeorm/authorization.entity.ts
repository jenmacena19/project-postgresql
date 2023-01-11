import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}