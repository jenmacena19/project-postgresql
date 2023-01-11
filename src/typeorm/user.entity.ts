import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';
import { Request } from './request.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  perfil: string;

  @OneToMany(() => Group, (group) => group.user, { eager: true })
  group: Group[];

  @OneToMany(() => Request, (request) => request.user, {
    eager: true,
  })
  request: Request[];
}
