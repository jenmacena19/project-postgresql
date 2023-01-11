import { Users } from "./user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgenteLocal } from "./agentelocal.entity";
import { SwHouse } from "./SwHouse.entity";

@Entity()
export class Group{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'customer_id',
      })
      id: number;

    @Column()
    alias: string;

    @ManyToOne(type => Users, id_users => id_users.id) id_users: Users; 

    @ManyToOne(type => AgenteLocal, id_agentelocal => id_agentelocal.id) id_agentelocal: AgenteLocal; 

    @ManyToMany(type => SwHouse, id_swhouse => id_swhouse.id) id_swhouse: SwHouse; 
 
}