// src/card/card.repository.ts
import { Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';
import { CreateCardDto } from './dto/create-card.dto';

// Simula um ID incremental
let nextId: number = 1;
// O array que simula a tabela 'cards' no banco de dados
const cardDatabase: Card[] = [];

@Injectable()
export class CardRepository {
  // 1. Simula a criação (INSERT) no banco
  create(createCardDto: CreateCardDto): Card {
    // ATENÇÃO: Nunca armazene CVV ou número completo!
    // A lógica de segurança estaria aqui.
    const newCard: Card = {
      id: nextId++,
      holderName: createCardDto.holderName,
      lastFourDigits: createCardDto.cardNumber.slice(-4), // Apenas os 4 dígitos
      flag: 'Visa', // Simulação, na vida real seria detectada
      expirationDate: createCardDto.expirationDate,
      isActive: true,
      createdAt: new Date(),
    };
    cardDatabase.push(newCard);
    return newCard;
  }
  // 2. Simula a busca de todos os cartões (SELECT *)
  findAll(): Card[] {
    return cardDatabase;
  }
  // 3. Simula a busca por um ID (SELECT WHERE id = ?)
  findOne(id: number): Card | undefined {
    return cardDatabase.find((card) => card.id === id);
  }
}
