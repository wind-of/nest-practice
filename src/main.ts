import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // If you want to bind a middleware globally 
  // app.use(NameOfMiddleWare);


  // If you want to register a pipe globally 
  // app.useGlobalPipes(PipeName);



  // If you want to register an interceptor globally 
  // app.useGlobalInterceptors(LoggingInterceptor);

  // If you want to register a filter globally 
  // app.useGlobalFilters(ExceptionFilterName);

  // If you want to register a guard globally 
  // app.useGlobalGuards(GuardName);

  // If you use the method of registration of guards/filters/interceptors shown above
  // filters/guards cannot inject dependencies
  // Another way to register a filter/guard globally can be seen in the app.module.ts file

  await app.listen(3000);
}
bootstrap();
