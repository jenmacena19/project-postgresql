import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class Request{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'customer_id',
      })
      id: number;

    @Column()
    requestType: string;

    @CreateDateColumn({
        type: 'timestamptz',
        nullable: false,
        default: '',
        name: 'createAt',
      })
    createAtt: string;

    @Column({
        type: 'json'
      })
    params: string;

    @ManyToOne(type => Users, createBy => createBy.id) createBy: Users; 

}