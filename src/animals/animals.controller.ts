import { Controller, Get } from '@nestjs/common'
import { CatsService } from 'src/cats/cats.service'
import { DogsService } from 'src/dogs/dogs.service'

@Controller('animals')
export class AnimalsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly dogsService: DogsService
    ) {}


  @Get('num')
  getAnimalsNum(): number {
    return this.catsService.getNum() + this.dogsService.getNum()
  }
}
