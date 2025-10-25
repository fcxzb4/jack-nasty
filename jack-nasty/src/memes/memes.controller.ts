import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,NotFoundException,} from '@nestjs/common';
import { MemeService } from './memes.service';
import { UpdateMemeDto } from "./dto/upadte-meme.dto"
import { CreateMemeDto } from './dto/create-meme.dto'
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

    if (!stock) {
      throw new NotFoundException(`${stock} fora de estoque`)
    }
    return stock;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Card {
    const card = this.MemeService.findOne(id);

     if (!card) {
      throw new NotFoundException(`o cartão ${card} nao foi encontrado`);
    }
    return card;
  }

  @Post()
  createCard(@Body() createMemeDto: CreateMemeDto) {
    return this.MemeService.createCard(createMemeDto);
  }

  @Put(':id')
  updateCard(@Param('id', ParseIntPipe) id: number, @Body() updateMemeDto: UpdateMemeDto) {
    const putCard = this.MemeService.updateCard(id, updateMemeDto);

     if (!putCard) {
      throw new NotFoundException(`nao foi possivel editar ${id}`);
    }
    return putCard;
  }

  @Delete(':id')
  deleteCard(@Param('id', ParseIntPipe) id: number): Card {   
    const deleteCard = this.MemeService.deleteCard(id);

    if (!deleteCard) {
          throw new NotFoundException(`nao foi possivel deletar o ${id}, nao foi encontrado`)
        }

    return deleteCard;
  }
}
