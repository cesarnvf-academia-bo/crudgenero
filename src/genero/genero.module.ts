import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './genero';

@Module({
  imports: [
    TypeOrmModule.forFeature([Genero]),
  ],
  providers: [GeneroService],
  controllers: [GeneroController]
})
export class GeneroModule {}
