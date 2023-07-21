import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './dto/create-car-dto';
import { UpdateCarDto } from './dto/update-car-dto';
import { SuccessResponseCar } from './dto/responses/responses-car-dto';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly appService: CarService) {}

  @ApiResponse({type: SuccessResponseCar, isArray: true})
  @Get(':model')
  findByModel(@Param('model') model : string,) {
    return this.appService.findByModel(model);
  }

  @ApiResponse({type: SuccessResponseCar, isArray: true})
  @Get()
  findAll(){
    return this.appService.findAll();
  }
  @ApiResponse({type: SuccessResponseCar})
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
