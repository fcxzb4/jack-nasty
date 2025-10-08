// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // Deve retornar uma string, não um objeto
  getHello(): string {
    return this.appService.getHello();
  }
}
