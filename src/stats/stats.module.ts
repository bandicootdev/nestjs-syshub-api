import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { SyscoinRpcModule } from '../syscoin-rpc/syscoin-rpc.module';

@Module({
  imports: [SyscoinRpcModule],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}
