import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './genero';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {

    constructor(
        @InjectRepository(Genero)
        private generoRepositorio: Repository<Genero>
    ) {}

    obtenerTodos() {
        return this.generoRepositorio.find();
    }

}
