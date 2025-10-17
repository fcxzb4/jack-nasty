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

  createCard(bodyData: any): string {
    bodyData.id = Date.now();
    bodyData.stock = true;
    cardDatabase.push(bodyData);
    return 'para-bens';
  }

  updateCard(id: number): string{
    
    return 'sucesso';
  }

  deleteCard(deletecard: number): Card {
    const cardIndex = cardDatabase.findIndex(
      (card) => card.id === deletecard - 1,
    );
    if (cardIndex === -1) {
      throw new NotFoundException(
        `Cartão com ID ${deletecard} não encontrado para exclusão.`,
      );
    }
    const deletedCard = cardDatabase.splice(cardIndex, 1)[0];

    return deletedCard;
  }


}
