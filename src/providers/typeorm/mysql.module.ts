import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('app.env') === 'production';

        return {
          type: 'mysql',
          host: configService.get('mysql.host'),
          port: configService.get('mysql.port'),
          username: configService.get('mysql.username'),
          password: configService.get('mysql.password'),
          database: configService.get('mysql.database'),
          autoLoadEntities: true,
          synchronize: !isProduction,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class MysqlClientModule {}
