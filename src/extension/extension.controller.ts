import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ExtensionService } from './extension.service';
import { Extension } from './extension';

@Controller('api/v1/extension')
export class ExtensionController {
    constructor(
        private readonly extensionServicio: ExtensionService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.extensionServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.extensionServicio.obtenerPorId(id);
    }

    @Post()
    adicionar(@Body() datos: Partial<Extension>) {
        return this.extensionServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Extension>) {
        return this.extensionServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.extensionServicio.borrarPorId(id);
    }
}
