import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SyscoinRpcClient } from '@syscoin/syscoin-js';

@Injectable()
export class SyscoinRpcService {
  constructor(private syscoinRpcClient: SyscoinRpcClient) {}

  countMasterNodes() {
    try {
      return this.syscoinRpcClient.callRpc('masternode_count').call();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
