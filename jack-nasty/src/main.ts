import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
// Importe a interface específica para a plataforma Express
import { NestExpressApplication } from '@nestjs/platform-express'; 

async function bootstrap() {
  // Use <NestExpressApplication> para que o TS reconheça os métodos do Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule); 

  // 1. Configura a pasta onde os arquivos estáticos (CSS, JS) estão
  // Note: Para usar este método, você precisa instalar @nestjs/platform-express se já não estiver instalado.
  app.useStaticAssets(join(__dirname, '..', '..', 'public')); 
  
  // 2. Configura a pasta onde as views (templates HBS) estão
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  
  // 3. Define o Handlebars como o motor de views
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();