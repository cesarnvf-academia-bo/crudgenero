import { Module } from '@nestjs/common';
import { GeneroModule } from './genero/genero.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    GeneroModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
