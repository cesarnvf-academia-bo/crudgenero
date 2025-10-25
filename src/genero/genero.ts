import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    genero: string;

}
