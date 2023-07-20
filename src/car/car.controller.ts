import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './dto/create-car-dto';
import { UpdateCarDto } from './dto/update-car-dto';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly appService: CarService) {}

  @Get('wolks')
  getCarWolks(): string {
    return this.appService.getCarWolks();
  }

  @Get('fusca')
  getCarFusca(): string {
    return this.appService.getCarFusca();
  }

  @Get()
  findAll(){
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id : string,) {
    return this.appService.findOne(+id);
  }

  @Post()
  create(@Body() createCarDto : CreateCarDto) {
    return this.appService.create(createCarDto);
  }

  @Patch(':id') 
  update(@Param('id') id : string, @Body() updateCarDto: UpdateCarDto ){
    return this.appService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }

}
