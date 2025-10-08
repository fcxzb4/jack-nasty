// src/card/card.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CardRepository } from './card.repository'; // <-- Importe o Repositório
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  // 1. Injete o Repositório no construtor
  constructor(private readonly cardRepository: CardRepository) {}

  // 2. O Serviço usa o Repositório para fazer a operação de "criação"
  create(createCardDto: CreateCardDto): Card {
    // Aqui estariam regras de negócio adicionais, como notificação ou validação complexa
    return this.cardRepository.create(createCardDto);
  }

  // 3. O Serviço usa o Repositório para fazer a operação de "busca"
  findAll(): Card[] {
    return this.cardRepository.findAll();
  }

  // 4. Busca por ID
  findOne(id: number): Card | undefined {
    return this.cardRepository.findOne(id);
  }

  // Outros métodos CRUD (update, remove) iriam aqui...
}
