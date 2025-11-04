import { Documento } from "../documento/documento";
import { Extension } from "../extension/extension";
import { Genero } from "../genero/genero";
import { Usuario } from "../usuario/usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Genero, genero => genero.personas, { eager: true })
    @JoinColumn({ name: 'genero_id' })
    genero: Genero

    @ManyToOne(() => Documento, documento => documento.personas, { eager: true })
    @JoinColumn({ name: 'documento_id' })
    documento: Documento

    @ManyToOne(() => Extension, extension => extension.personas, { eager: true })
    @JoinColumn({ name: 'extension_id' })
    extension: Extension

    @Column()
    paterno: string;

    @Column()
    materno: string;

    @Column()
    nombres: string;

    @Column()
    dip: string;

    @Column()
    numerocomplementario: string;

    @Column()
    fechanacimiento: Date;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    celular: string;

    @Column()
    correo: string;

    @OneToMany(() => Usuario, usuario => usuario.persona)
    usuarios: Usuario[];
}

