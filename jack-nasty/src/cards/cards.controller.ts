import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,} from '@nestjs/common';
import { CardService } from './cards.service';
import { CreateMemeDto } from "./dto/create-cards.dto"
import { UpdateMemeDto } from "./dto/update-cards.dto"
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
  createCard(@Body() createMemeDto: CreateMemeDto) {
    return this.cardService.createCard(createMemeDto);
  }

  @Put(':id')
  updateCard(@Param('id', ParseIntPipe) id: number, @Body() updateMemeDto: UpdateMemeDto) {
    const putCard = this.cardService.updateCard(id, updateMemeDto)
  }

  @Delete(':id')
  deleteCard(@Param('id', ParseIntPipe) id: number): Card {
    const deleteCard = this.cardService.deleteCard(id);
    return deleteCard;
  }
}
