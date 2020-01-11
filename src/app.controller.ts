import { Controller, Get, Post, UseFilters, HttpException } from '@nestjs/common'

@Controller()

export class AppController {
  @Get()
  getHello(): String {
    return "Hello world"
  }
}
