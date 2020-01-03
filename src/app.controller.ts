import { Controller, Get, Post, UseFilters, HttpException } from '@nestjs/common'
import { CustomException } from './exceptions/custom.exception'
import { HttpExceptionFilter } from './filters/http-exception.filter'

@Controller() // means that the controller that uses this decorator is the main

// You can register filter before exporting controllers and it will be controller-scoped
// @UseFilters(HttpExceptionFilter) 

export class AppController {
  @Get()
  getHello(): String {
    return "Hello world"
  }

  @Post()

  // when you set up filter here, it will be method-scoped and applied only to the method below 
  @UseFilters(HttpExceptionFilter)
  // applaying filter by using a class 
  // instead of an instance (new HttpExceptionFilter())
  // (preferably, because it reduces memory usage)
  async testException() {
    throw new CustomException()
  }
}
