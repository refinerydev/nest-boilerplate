import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from '../../entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(ItemEntity)
    private item: Repository<ItemEntity>,
  ) {}

  async store(newItem: ItemEntity) {
    const user = this.item.create(newItem);
    return this.item.save(user);
  }

  async findAll() {
    const data = await this.item.find();

    return data;
  }
}
