import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Extension } from './extension';
import { Repository } from 'typeorm';

@Injectable()
export class ExtensionService {
    constructor(
        @InjectRepository(Extension)
        private extensionRepository: Repository<Extension>,
    ) { }

    async obtenerTodos() {
        const dato = await this.extensionRepository.find();
        return dato;
    }

    async obtenerPorId(id: number) {
        const dato = await this.extensionRepository.findOne({ where: { id } });
        return dato;
    }

    async adicionar(datos: Partial<Extension>) {
        const nuevo = this.extensionRepository.create(datos);
        return await this.extensionRepository.save(nuevo);
    }

    async modificar(id: number, datos: Partial<Extension>) {
        const dato = await this.extensionRepository.findOne({ where: { id } });
        if (!dato) {
            throw new NotFoundException(`Extension con id ${id} no encontrado`);
        }
        Object.assign(dato, datos);
        return await this.extensionRepository.save(dato);
    }

    async borrarPorId(id: number) {
        const resultado = await this.extensionRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Extension con id ${id} no encontrado`);
        }
        return { mensaje: `Extension con id ${id} borrado correctamente` }
    }
}
