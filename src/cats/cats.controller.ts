import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findALl(): String {
    return this.catsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') params): String {
    return this.catsService.findOne(params.id)
  }
}