import { Persona } from "../persona/persona";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    genero: string;

    @OneToMany(()=> Persona, persona => persona.genero)
    personas: Persona[]
}
