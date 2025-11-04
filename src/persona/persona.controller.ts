import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona';

@Controller('api/v1/persona')
export class PersonaController {
    constructor(
        private readonly personaServicio: PersonaService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.personaServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.personaServicio.obtenerPorId(id);
    }

    @Post()
    adicionar(@Body() datos: Partial<Persona>) {
        return this.personaServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Persona>) {
        return this.personaServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.personaServicio.borrarPorId(id);
    }
}
