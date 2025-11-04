import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './persona';

@Module({
    imports: [
        TypeOrmModule.forFeature([Persona]),
    ],
    providers: [PersonaService],
    controllers: [PersonaController]
})
export class PersonaModule { }
