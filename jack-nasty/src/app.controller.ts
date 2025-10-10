// src/app.controller.ts
// src/app.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

// O Controller está na rota base (/)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
