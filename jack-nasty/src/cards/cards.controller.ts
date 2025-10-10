import { Controller, Get } from '@nestjs/common';
import { CardService } from './cards.service';
import { Card } from './model/card_model';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findAll(): Card[] {
    return this.cardService.findAll();
  }
}
@Controller('id')
export class IdController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findId(): Number[] {
    return this.cardService.findId();
  }
}
