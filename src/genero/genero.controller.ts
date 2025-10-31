import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { Genero } from './genero';

@Controller('api/v1/genero')
export class GeneroController {

    constructor(
        private readonly generoServicio: GeneroService,
    ) {}

    @Get()
    obtenerTodos() {
        return this.generoServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id:number) {
        return this.generoServicio.obtenerPorId(id);
    }

    @Post()
    adicionar(@Body() datos: Partial<Genero>) {
        return this.generoServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id:number, @Body() datos: Partial<Genero>){
        return this.generoServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id:number) {
        return this.generoServicio.borrarPorId(id);
    }

}
