import { Controller, Get, Post, Param, Body, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common'
import { CatsService } from './cats.service'
import { ICat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
// import { JoiValidationPipe } from 'src/pipes/joi.validation.pipe'
// import { createCatSchema } from 'src/cats/schemas/joi.cats.schema'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // Pipes, similar to exception filters, can be 
  // method-scoped, controller-scoped and global-scoped,
  // But the difference between them is that pipes can also be param-scoped (see below)
  // createCat(@Body(ValidationPipe) createCatDto: CreateCatDto)
  
  // @UsePipes(JoiValidationPipe(createCatSchema))
  @UsePipes(ValidationPipe)
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findALl(): ICat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): ICat | string {
    return this.catsService.findOne(params.id);
  }

  @Put(':id')
  updateCat(@Body() updateCatDto: UpdateCatDto, @Param() params) {
    return this.catsService.update(updateCatDto, params.id);
  }

  @Delete(':id')
  deleteCat(@Param() params) {
    return this.catsService.delete(params.id);
  }
}