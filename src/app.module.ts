import { Module, ValidationPipe } from '@nestjs/common';
import { StatsModule } from './stats/stats.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressModule } from './address/address.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          uri: config.get<string>('MONGO_URI'),
        };
      },
      inject: [ConfigService],
    }),
    StatsModule,
    AddressModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true }),
    },
  ],
})
export class AppModule {}
