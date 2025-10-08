import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- Importe aqui!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adiciona o ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      // Garante que apenas campos definidos no DTO sejam aceitos
      whitelist: true,
      // Opcional: Transforma tipos de dados (ex: '5' em 5)
      transform: true,
      // Se houver dados indesejados, retorna erro
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
