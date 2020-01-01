import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Get()
  findALl(): ICat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): ICat | string {
    return this.catsService.findOne(params.id);
  }
}