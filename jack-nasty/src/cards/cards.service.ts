import { Injectable, NotFoundException } from "@nestjs/common";
import { Card } from './model/card_model';
import { cardDatabase } from './model/cards_bd';

@Injectable()
export class CardService {
  findAll(): Card[] {
    return cardDatabase;
  }
  
  findInStock(): Card[] {
    const filteredCards = cardDatabase.filter((card) => card.stock === true);
    return filteredCards;
  }
  
  findOne(id: number): Card {
    const card = cardDatabase.find((card) => card.id === id);

    if (!card) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado.`);
    }
    return card;
  }


  createCard(bodyData: any){
    bodyData.id = Date.now();
    bodyData.stock = true;
    cardDatabase.push(bodyData);
    return bodyData;
  }

  updateCard(id: number, body: any){
    const cardIndex = cardDatabase.findIndex((card) => card.id === id);
    if (cardIndex === -1) {
      return 'Erro: Cartão não encontrado.';
    }
    const originalCard = cardDatabase[cardIndex];
    cardDatabase[cardIndex] = { ...originalCard, ...body };

    return cardDatabase[cardIndex];
  }

  deleteCard(deletecard: number): Card {
    const cardIndex = cardDatabase.findIndex(
      (cardDatabase) => cardDatabase.id === deletecard,
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
