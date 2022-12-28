import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { ItemModule } from './modules/item/item.module';
import { MysqlClientModule } from './providers/typeorm/mysql.module';

@Module({
  imports: [AppConfigModule, MysqlClientModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
