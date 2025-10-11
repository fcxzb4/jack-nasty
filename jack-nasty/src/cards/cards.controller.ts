import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CardService } from './cards.service';
import type { Card } from './model/card_model';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findAll(): Card[] {
    return this.cardService.findAll();
  }

  @Get('stock')
  findInStock(): Card[] {
     const stock = this.cardService.findInStock()
     return stock
  }
  
  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number): Card {
    const card = this.cardService.findOne(id); 
    return card;
  }

}
