import { Module } from '@nestjs/common';
import { GeneroModule } from './genero/genero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './genero/genero';
import { DocumentoModule } from './documento/documento.module';
import { ExtensionModule } from './extension/extension.module';

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
    ExtensionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
