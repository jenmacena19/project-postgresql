import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}