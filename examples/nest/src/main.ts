import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5057, () => {
    console.log('🦁 Nest listening at http://localhost:5057');
  });
}
bootstrap();
