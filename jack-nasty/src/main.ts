import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos que não estão no DTO
      forbidNonWhitelisted: true, // Lança um erro se campos extras forem enviados
    }),
  );

  await app.listen(3001);
}
bootstrap();