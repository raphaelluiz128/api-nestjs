import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarService } from './car/car.service';
import { CarController } from './car/car.controller';
import { CarModule} from './car/car.module';

@Module({
  imports: [CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
