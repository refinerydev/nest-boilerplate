import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from './item.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemService, ItemRepository],
  controllers: [ItemController],
})
export class ItemModule {}
