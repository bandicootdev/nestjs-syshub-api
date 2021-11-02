import { Module } from '@nestjs/common';
import { StatsModule } from './stats/stats.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
