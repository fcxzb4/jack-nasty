import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { MemeController } from './memes/memes.controller';
import { MemeService } from './memes/memes.service';

@Module({
  imports: [CardsModule],
  controllers: [AppController , MemeController],
  providers: [AppService , MemeService],
})
export class AppModule {}
