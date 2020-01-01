import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cats } from './cats/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, Cats],
})
export class AppModule {}
