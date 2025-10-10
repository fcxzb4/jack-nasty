import { Module } from '@nestjs/common';
import { CardService } from './cards.service';
import { CardController } from './cards.controller';

@Module({
  imports: [],
  controllers: [CardController],
  providers: [CardService],
})
export class CardsModule {}
