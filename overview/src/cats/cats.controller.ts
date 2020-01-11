import { Controller, Get, Post, Param, Body, Put, Delete, UsePipes, ValidationPipe, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common'
import { CatsService } from './cats.service'
import { ICat } from './interfaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { SomeGuard } from 'src/guards/some.guard'
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor'


/* 
Order: 
  Middleware 
  --> Guards 
  --> Interceptor
  --> Pipes
  --> Controller
  --> Service
  --> Interceptor (Outbound)
  --> Filters
*/


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  /* 
  Pipes, exception filters, guards, interceptor have different scopes:
  method-scope, controller-scope and global-scope.

  Method-scoped:
  @Use[Pipes || Filters || Guards || Interceptors]()
  handler(...) {...}

  Controller-scoped:
  @Use[Pipes || Filters || Guards || Interceptors]()
  export class ControllerName{...}
  
  Global-scoped:
  main.ts:
    ...
    const app = await NestFactory.create(AppModule);
  
    app.use(MiddlewareName)
    app.useGlobal[Interceptors || Filters || Pipes || Guards]()
    ...

  Pipes have an especial scope - param-scope:
  createCat(@Body(ValidationPipe) createCatDto: CreateCatDto)
  */

  @Post()

  @UseGuards(SomeGuard)
  @SetMetadata('meta', ['test-meta'])

  createCat(@Body() createCatDto: CreateCatDto): ICat {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @UseInterceptors(LoggingInterceptor)
  findALl(): ICat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
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