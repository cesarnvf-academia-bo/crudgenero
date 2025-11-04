import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { JwtAuthGuard } from 'src/seguridadjwt/JwtAuthGuard';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioServicio: UsuarioService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.usuarioServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioServicio.obtenerPorId(id);
    }

    @Post()
    adicionar(@Body() datos: Partial<Usuario>) {
        return this.usuarioServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Usuario>) {
        return this.usuarioServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioServicio.borrarPorId(id);
    }
}
