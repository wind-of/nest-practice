import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [AppController],
  imports: [CatsModule],
})
export class AppModule {}
