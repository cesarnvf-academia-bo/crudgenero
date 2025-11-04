import { Persona } from "../persona/persona";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Documento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documento: string;

    @OneToMany(() => Persona, persona => persona.documento)
    personas: Persona[]
}
