import { Module } from '@nestjs/common';
import { SyscoinRpcService } from './syscoin-rpc.service';
import { RpcConfigOptions, SyscoinRpcClient } from '@syscoin/syscoin-js';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    SyscoinRpcService,
    {
      inject: [ConfigService],
      provide: SyscoinRpcClient,
      useFactory: (configService: ConfigService) => {
        return new SyscoinRpcClient({
          host: configService.get<string>('RPC_HOST') || '127.0.0.1',
          rpcPort: configService.get<number>('RPC_PORT'),
          username: configService.get<string>('RPC_USERNAME'),
          password: configService.get<string>('RPC_PASSWORD'),
          logLevel: configService.get<string>('RPC_SYSCOIN_LOG_LEVEL'),
        } as RpcConfigOptions);
      },
    },
  ],
  exports: [SyscoinRpcService],
})
export class SyscoinRpcModule {}
