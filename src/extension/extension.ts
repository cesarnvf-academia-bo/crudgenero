import { Persona } from "../persona/persona";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Extension {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    extension: string;

    @OneToMany(()=> Persona, persona => persona.extension)
    personas: Persona[]
}
