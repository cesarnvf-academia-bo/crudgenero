import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { Genero } from './genero';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/seguridadjwt/JwtAuthGuard';

@UseGuards(JwtAuthGuard)
@ApiTags('Genero')
@Controller('api/v1/genero')
export class GeneroController {

    constructor(
        private readonly generoServicio: GeneroService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.generoServicio.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.generoServicio.obtenerPorId(id);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Crear un nuevo genero' })
    @ApiResponse({ status: 201, description: 'Genero creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    @Post()
    adicionar(@Body() datos: Partial<Genero>) {
        return this.generoServicio.adicionar(datos);
    }

    @Put(':id')
    modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Genero>) {
        return this.generoServicio.modificar(id, datos);
    }

    @Delete(':id')
    borradoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.generoServicio.borrarPorId(id);
    }

}
