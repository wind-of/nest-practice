import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AnimalsModule } from './animals/animals.module'

@Module({
  controllers: [AppController],
  imports: [AnimalsModule],
})
export class AppModule {}
