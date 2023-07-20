import { Inject, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car-dto';
import { UpdateCarDto } from './dto/update-car-dto';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {

  constructor(
    @Inject('CAR_REPOSITORY')
    private carRepository: Repository<Car>,
  ) {}

  getCarFusca(): string {
    return 'Fusca!';
  }
  getCarWolks(): string {
    return 'Wolks';
  }
  create(createCarDto: CreateCarDto) {
    return this.carRepository.save(createCarDto);
  }
  findOne(id: number){
    return this.carRepository.findOne({ where: { id } });  
  }

  findAll(){
    return this.carRepository.find();
  }

  update(id: number, updateCarDto : UpdateCarDto){
    return this.carRepository.update(id, updateCarDto);
  }
  
  remove(id: number){
    return this.carRepository.delete(id);  }
}
