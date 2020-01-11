import { Module } from '@nestjs/common'
import { AnimalsController } from './animals.controller'
import { CatsModule } from 'src/cats/cats.module'
import { DogsModule } from 'src/dogs/dogs.module'

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
