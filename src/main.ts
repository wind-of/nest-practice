import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // If you want to bind middleware for every 
  // registered route, you can use the app.use():
  // app.use(NameOfMiddleWare);


  // If you want register the filter globally 
  // for every route handler
  // app.useGlobalFilters(new HttpExceptionFilter());

  // If you want to register a pipe globally 
  // app.useGlobalPipes(new PipeName());

  // Another way to register a filter globally can be seen in the file app.module.ts
  // The difference between these two methods is that
  // in the first approach (see above), the filter cannot inject dependencies
  // (And using the second approach, the filter can)

  await app.listen(3000);
}
bootstrap();
