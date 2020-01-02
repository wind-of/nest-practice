import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // If you want to bind middleware for every registered route, you can use the app.use():
  // app.use(NameOfMiddleWare);
  await app.listen(3000);
}
bootstrap();
