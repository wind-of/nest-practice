import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // If you want to bind a middleware globally 
  // app.use(NameOfMiddleWare);


  // If you want to register a pipe globally 
  // app.useGlobalPipes(PipeName);


  // If you want to register a filter globally 
  // app.useGlobalFilters(ExceptionFilterName);

  // Another way to register a filter globally can be seen in the file app.module.ts
  // The difference between these two methods is that
  // in the first approach (see above), the filter cannot inject dependencies

  await app.listen(3000);
}
bootstrap();
