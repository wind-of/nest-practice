import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { CatsModule } from './cats/cats.module'
import { CatsMiddleware } from './middlewares/cats.middleware'

@Module({
  imports: [CatsModule],
  controllers: [AppController],
})

// If you want to register guards globally 
// and give them the ability to inject dependencies
// you should set up the guard directly in 
// any module using the following contruction:
// providers: [
//   {                        ***Guards***
//     provide: APP_GUARD,
//     useClass: RolesGuard,
//   }, 
//   {                        ***Exception filters***
//     provide: APP_FILTER,
//     useClass: HttpExceptionFilter,
//   },
//   {                        ***Inteceptors***
//     provide: APP_INTERCEPTOR,
//     useClass: LoggingInterceptor,
//   }
// ]
// ...regardless of the module where 
// you use this construction(s),
// they (guards, filters, interceptors) will be global

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatsMiddleware)

      // .exclude({path: cats, method: ...})
      // You can also exclude an entire controller (see the next line)
      // .exclude(CatsController)

      .forRoutes({path: 'cats', method: RequestMethod.GET})
      // ...or define middleware for an entire controller (see the next line)
      // .forRoutes(CatsController)
  }
}
