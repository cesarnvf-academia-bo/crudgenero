import { Module } from '@nestjs/common';
import { GeneroModule } from './genero/genero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './genero/genero';
import { DocumentoModule } from './documento/documento.module';
import { ExtensionModule } from './extension/extension.module';
import { PersonaModule } from './persona/persona.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123qwe",
      database: "tpvbd",
      autoLoadEntities: true,
      synchronize: true,
    }),
    GeneroModule,
    DocumentoModule,
    ExtensionModule,
    PersonaModule,
    UsuarioModule,
    AutentificacionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
