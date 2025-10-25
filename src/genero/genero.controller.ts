import { Controller, Get } from '@nestjs/common';
import { GeneroService } from './genero.service';

@Controller('api/v1/genero')
export class GeneroController {

    constructor(
        private readonly generoServicio: GeneroService
    ) {}

    @Get()
    obtenerTodos() {
        return this.generoServicio.obtenerTodos();
    }

}
