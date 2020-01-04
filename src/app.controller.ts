import { Controller, Get, Post, UseFilters, HttpException } from '@nestjs/common'
import { CustomException } from './exceptions/custom.exception'
import { HttpExceptionFilter } from './filters/http-exception.filter'

@Controller()

// You can register filter before exporting controllers and it will be controller-scoped
// @UseFilters(ExceptionFilterName) 
// ...also and pipes
// @UsePipes(PipeName) 

export class AppController {
  @Get()
  getHello(): String {
    return "Hello world"
  }

  @Post()
  // when you set up filter here, it will be method-scoped and applied only to the method below 
  @UseFilters(HttpExceptionFilter)
  // applaying filter by using a class (HttpExceptionFilter)
  // instead of an instance (new HttpExceptionFilter())
  // is preferably, because it reduces memory usage (DI?)
  async testException() {
    throw new CustomException()
  }
}
