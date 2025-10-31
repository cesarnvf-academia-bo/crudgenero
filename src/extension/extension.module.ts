import { Module } from '@nestjs/common';
import { ExtensionService } from './extension.service';
import { ExtensionController } from './extension.controller';
import { Extension } from './extension';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([Extension]),
    ],
  providers: [ExtensionService],
  controllers: [ExtensionController]
})
export class ExtensionModule {}
