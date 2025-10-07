import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index') // <--- Usa o decorador Render para o template 'index.hbs'
  getHello() {
    // Retorna um objeto com os dados que serão injetados no template ({{message}}, {{title}})
    return { 
      message: this.appService.getHello(), // A mensagem 'Hello World!' vem do Service
      title: 'Página Inicial do NestJS' 
    };
  }
}