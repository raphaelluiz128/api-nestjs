import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { DatabaseModule } from 'src/database/database.module';
import { carProviders } from './car.providers';

@Module({
  imports: [DatabaseModule], //registrar outros módulos
  controllers: [CarController], // registrar controladores
  providers: [...carProviders,CarService], //registrar services
})
export class CarModule {}
