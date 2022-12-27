import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: false } });
  }
}
