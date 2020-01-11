import { Controller, Get} from '@nestjs/common'

@Controller()

export class AppController {
  @Get()
  getHello(): String {
    return "Hello world"
  }
}
