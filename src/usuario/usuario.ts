import { Persona } from "../persona/persona";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Persona, persona => persona.usuarios, { eager: true })
    @JoinColumn({ name: 'persona_id' })
    persona: Persona | null;

    @Column()
    usuario: string;

    @Column()
    clave: string;

    @Column()
    rol: string;
}
