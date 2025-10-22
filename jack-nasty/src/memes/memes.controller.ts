import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,} from '@nestjs/common';
import { MemeService } from './memes.service';
import type { Card } from './model/meme_model';

@Controller('meme')
export class MemeController {
  constructor(private readonly MemeService: MemeService) {}

  @Get()
  findAll(): Card[] {
    return this.MemeService.findAll();
  }

  @Get('meme-stock')
  findInStock(): Card[] {
    const stock = this.MemeService.findInStock();
    return stock;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Card {
    const card = this.MemeService.findOne(id);
    return card;
  }

  @Post()
  createCard(@Body() bodyData: any) {
    return this.MemeService.createCard(bodyData);
  }

  @Put(':id')
  updateCard(@Param('id', ParseIntPipe) id: number, @Body() bodyData: any) {
    const putCard = this.MemeService.updateCard(id, bodyData);
    return putCard;
  }

  @Delete(':id')
  deleteCard(@Param('id', ParseIntPipe) id: number): Card {
    const deleteCard = this.MemeService.deleteCard(id);
    return deleteCard;
  }
}
