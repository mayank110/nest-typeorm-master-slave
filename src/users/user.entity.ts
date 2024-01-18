import { Entity, PrimaryGeneratedColumn, Column, IsNull  } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({name: 'last_name', nullable:true})
    lastName: string;
}