import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    async obtenerTodos() {
        const dato = await this.usuarioRepository.find();
        return dato;
    }

    async obtenerPorId(id: number) {
        const dato = await this.usuarioRepository.findOne({ where: { id } });
        return dato;
    }

    async adicionar(datos: Partial<Usuario>) {
        if (datos.clave) {
            datos.clave = await bcrypt.hash(datos.clave, 10);
        }
        const nuevo = this.usuarioRepository.create(datos);
        return await this.usuarioRepository.save(nuevo);
    }

    async modificar(id: number, datos: Partial<Usuario>) {
        const dato = await this.usuarioRepository.findOne({ where: { id } });
        if (!dato) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        if (datos.clave) {
            datos.clave = await bcrypt.hash(datos.clave, 10);
        }
        Object.assign(dato, datos);
        return await this.usuarioRepository.save(dato);
    }

    async borrarPorId(id: number) {
        const resultado = await this.usuarioRepository.delete(id);
        if (resultado.affected === 0) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return { mensaje: `Usuario con id ${id} borrado correctamente` }
    }

    async obtenerPorUsuario(usuario: string) {
        const dato = await this.usuarioRepository.findOne({ where: { usuario } });
        return dato;
    }
}
