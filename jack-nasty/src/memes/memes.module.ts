import { Module } from '@nestjs/common';
import { MemeService } from './memes.service';
import { MemeController } from './memes.controller';

@Module({
  imports: [],
  controllers: [MemeController],
  providers: [MemeService],
})
export class MemesModule {}
