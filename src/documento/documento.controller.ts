import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { Documento } from './documento';

@Controller('api/v1/documento')
export class DocumentoController {

    constructor(
        private readonly documentoServicio: DocumentoService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.documentoServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.documentoServicio.obtenerPorId(id);
    }

    @Post()
    adicionar(@Body() datos: Partial<Documento>) {
        return this.documentoServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Documento>) {
        return this.documentoServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.documentoServicio.borrarPorId(id);
    }

}
