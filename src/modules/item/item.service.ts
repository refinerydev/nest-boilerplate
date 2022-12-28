import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from './item.repository';
import { Store } from './item.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  constructor(private repo: ItemRepository) {}

  async store(item: Store) {
    const newItem: ItemEntity = {
      name: item.name,
      category_id: item.category_id,
    };

    await this.repo.store(newItem);
  }

  async findAll() {
    const data = await this.repo.findAll();

    return data;
  }
}
