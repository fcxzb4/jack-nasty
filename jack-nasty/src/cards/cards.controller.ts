import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
    const stock = this.cardService.findInStock();
    return stock;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Card {
    const card = this.cardService.findOne(id);
    return card;
  }

  @Post()
  createCard(@Body() bodyData: any) {
    return this.cardService.createCard(bodyData);
  }

  @Put(':id/price')
  addProm(@Param('id', ParseIntPipe) id: number) {
    return 'desconto dado';
  }

  @Put(':id/description')
  updateDescription(
    @Param('id', ParseIntPipe) id: string,
    @Body() bodyData: any,
  ) {
    return 'absolute sucesso';
  }

  @Delete(':id')
  deleteCard(@Param('id', ParseIntPipe) id: number): Card {
    const deleteCard = this.cardService.deleteCard(id);
    return deleteCard;
  }
}
