import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'

@Module({
  controllers: [AppController],
})
export class AppModule {}
