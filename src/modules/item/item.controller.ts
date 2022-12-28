import { Store } from './item.interface';
import { ItemService } from './item.service';
import { Response } from 'express';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('items')
export class ItemController {
  constructor(private service: ItemService) {}

  @Post()
  async store(
    @Body()
    store: Store,
    @Res() res: Response,
  ) {
    await this.service.store(store);

    const response = { message: 'CREATED' };

    return res.status(HttpStatus.CREATED).send(response);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const data = await this.service.findAll();

    return res.status(HttpStatus.OK).send(data);
  }
}
