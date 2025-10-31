import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './genero';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {

    constructor(
        @InjectRepository(Genero)
        private generoRepository: Repository<Genero>,
    ) {}

    async obtenerTodos() {
        const dato = await this.generoRepository.find();
        return dato;
    }

    async obtenerPorId(id: number) {
        const dato = await this.generoRepository.findOne( {where: {id}});
        return dato;
    }

    async adicionar(datos: Partial<Genero>) {
        const nuevo = this.generoRepository.create(datos);
        return await this.generoRepository.save(nuevo);
    }

    async modificar(id: number, datos: Partial<Genero>) {
        const dato = await this.generoRepository.findOne( {where: {id}});
        if (!dato) {
            throw new NotFoundException(`Genero con id ${id} no encontrado`);
        }
        Object.assign(dato, datos);
        return await this.generoRepository.save(dato);
    }

    async borrarPorId(id: number){
        const resultado = await this.generoRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Genero con id ${id} no encontrado`);
        }
        return {mensaje: `Genero con id ${id} borrado correctamente`}
    }


}
