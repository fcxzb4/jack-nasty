import { Injectable } from '@nestjs/common';
import { Card } from './model/card_model';
import { cardDatabase } from './model/cards_bd';

@Injectable()
export class CardService {
  findAll(): Card[] {
    return cardDatabase;
  }

  findId(): Number[]{
    return `o id ${cardDatabase.id}`;
  }
}
