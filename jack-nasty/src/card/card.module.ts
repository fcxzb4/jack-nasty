// src/card/card.module.ts
import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardRepository } from './card.repository'; // <-- Importe o Repositório

@Module({
  imports: [], // Módulos que este módulo depende
  controllers: [CardController],
  providers: [
    CardService,
    CardRepository// <-- Adicione o Repositório como um provedor
  ],
  exports: [CardService]
})
export class CardModule {}
