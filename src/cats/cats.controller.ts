import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  
  @Put()
  updateCat(@Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(updateCatDto);
  }

  @Get()
  findALl(): ICat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): ICat | string {
    return this.catsService.findOne(params.id);
  }

  @Delete(':id')
  deleteCat(@Param() params) {
    return this.catsService.delete(params.id);
  }
}