import { Controller, Get, Post, Param, Body, Put, Delete, UsePipes, ValidationPipe, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common'
import { CatsService } from './cats.service'
import { ICat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { SomeGuard } from 'src/guards/some.guard'
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor'
// import { JoiValidationPipe } from 'src/pipes/joi.validation.pipe'
// import { createCatSchema } from 'src/cats/schemas/joi.cats.schema'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // Pipes, similar to exception filters and guards, can be 
  // method-scoped, controller-scoped and global-scoped,
  // But the difference between them is that pipes can also be param-scoped (see below)
  // createCat(@Body(ValidationPipe) createCatDto: CreateCatDto)
  
  @UsePipes(ValidationPipe)
  // @UsePipes(JoiValidationPipe(createCatSchema))
  @UseInterceptors(LoggingInterceptor)
  @UseGuards(SomeGuard)
  @SetMetadata('meta', ['test-meta'])
  createCat(@Body() createCatDto: CreateCatDto): ICat {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findALl(): ICat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() {id}): ICat {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  updateCat(@Body() updateCatDto: UpdateCatDto, @Param() {id}): ICat {
    return this.catsService.update(updateCatDto, id);
  }

  @Delete(':id')
  deleteCat(@Param() {id}): ICat {
    return this.catsService.delete(id);
  }
}