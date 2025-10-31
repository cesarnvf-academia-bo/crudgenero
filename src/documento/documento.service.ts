import { Injectable, NotFoundException } from '@nestjs/common';
import { Documento } from './documento';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentoService {
    constructor(
        @InjectRepository(Documento)
        private documentoRepository: Repository<Documento>,
    ) { }

    async obtenerTodos() {
        const dato = await this.documentoRepository.find();
        return dato;
    }

    async obtenerPorId(id: number) {
        const dato = await this.documentoRepository.findOne({ where: { id } });
        return dato;
    }

    async adicionar(datos: Partial<Documento>) {
        const nuevo = this.documentoRepository.create(datos);
        return await this.documentoRepository.save(nuevo);
    }

    async modificar(id: number, datos: Partial<Documento>) {
        const dato = await this.documentoRepository.findOne({ where: { id } });
        if (!dato) {
            throw new NotFoundException(`Documento con id ${id} no encontrado`);
        }
        Object.assign(dato, datos);
        return await this.documentoRepository.save(dato);
    }

    async borrarPorId(id: number) {
        const resultado = await this.documentoRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Documento con id ${id} no encontrado`);
        }
        return { mensaje: `Documento con id ${id} borrado correctamente` }
    }
}
