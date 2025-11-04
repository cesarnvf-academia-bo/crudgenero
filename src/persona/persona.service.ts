import { Injectable, NotFoundException } from '@nestjs/common';
import { Persona } from './persona';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Persona)
        private personaRepository: Repository<Persona>,
    ) { }

    async obtenerTodos() {
        const dato = await this.personaRepository.find();
        return dato;
    }

    async obtenerPorId(id: number) {
        const dato = await this.personaRepository.findOne({ where: { id } });
        return dato;
    }

    async adicionar(datos: Partial<Persona>) {
        const nuevo = this.personaRepository.create(datos);
        return await this.personaRepository.save(nuevo);
    }

    async modificar(id: number, datos: Partial<Persona>) {
        const dato = await this.personaRepository.findOne({ where: { id } });
        if (!dato) {
            throw new NotFoundException(`Persona con id ${id} no encontrado`);
        }
        Object.assign(dato, datos);
        return await this.personaRepository.save(dato);
    }

    async borrarPorId(id: number) {
        const resultado = await this.personaRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Persona con id ${id} no encontrado`);
        }
        return { mensaje: `Persona con id ${id} borrado correctamente` }
    }
}
