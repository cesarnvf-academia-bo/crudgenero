import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Documento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documento: string;
}
