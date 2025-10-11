import { Injectable } from '@nestjs/common';
import { Card } from './model/card_model';
import { cardDatabase } from './model/cards_bd';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CardService {
  findAll(): Card[] {
    return cardDatabase;
  }

  findOne(id: number): Card {
    const card = cardDatabase.find((card) => card.id === id);

    if (!card) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado.`);
    }
    return card;
  }

  findInStock(): Card[] {
    const filteredCards = cardDatabase.filter((card) => card.stock === true);
    return filteredCards;
  }
}
