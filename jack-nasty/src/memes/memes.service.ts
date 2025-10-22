import { Injectable, NotFoundException } from '@nestjs/common';
import { mockCards } from './model/memes_bd';
import type { Card } from './model/meme_model';

@Injectable()
export class MemeService {
  findAll(): Card[] {
    return mockCards;
  }

  findInStock(): Card[] {
    const filteredCards = mockCards.filter((card) => card.stock === true);
    return filteredCards;
  }
  
  findOne(id: number): Card {
    const card = mockCards.find((card) => card.id === id);

    if (!card) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado.`);
    }
    return card;
  }

  createCard(bodyData: any) {
    bodyData.id = Date.now();
    bodyData.stock = true;
    mockCards.push(bodyData);
    return bodyData;
  }

  updateCard(id: number, body: any) {
    const cardIndex = mockCards.findIndex((card) => card.id === id);
    if (cardIndex === -1) {
      return 'Erro: Cartão não encontrado.';
    }
    const originalCard = mockCards[cardIndex];
    mockCards[cardIndex] = { ...originalCard, ...body };

    return mockCards[cardIndex];
  }

  deleteCard(deletecard: number): Card {
    const cardIndex = mockCards.findIndex(
      (cardDatabase) => cardDatabase.id === deletecard,
    );
    if (cardIndex === -1) {
      throw new NotFoundException(
        `Cartão com ID ${deletecard} não encontrado para exclusão.`,
      );
    }
    const deletedCard = mockCards.splice(cardIndex, 1)[0];
    return deletedCard;
  }
}
