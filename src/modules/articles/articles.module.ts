import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Module({
  providers: [ArticlesService, PrismaService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
