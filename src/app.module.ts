import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsMiddleware } from './middlewares/cats.middleware'

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatsMiddleware)

      // .exclude({path: cats, method: ...})
      // You can also expclude an entire controller, like...
      // .exclude(CatsController)

      .forRoutes({path: 'cats', method: RequestMethod.GET})
      // ...or define middleware for all the routes defined in the controller
      // .forRoutes(CatsController)
  }
}
