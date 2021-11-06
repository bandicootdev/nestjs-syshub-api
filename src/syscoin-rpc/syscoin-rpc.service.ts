import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SyscoinRpcClient } from '@syscoin/syscoin-js';

interface ISyscoinRpcService {
  getRpcInfo();
  countMasterNodes(): Promise<unknown>;
  validateSysCoinAddress(address): Promise<{ isvalid: boolean; error: string }>;
}

@Injectable()
export class SyscoinRpcService implements ISyscoinRpcService {
  constructor(private syscoinRpcClient: SyscoinRpcClient) {}

  getRpcInfo() {
    try {
      return this.syscoinRpcClient.callRpc('getrpcinfo').call();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  countMasterNodes(): Promise<unknown> {
    try {
      return this.syscoinRpcClient.callRpc('masternode_count').call();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async validateSysCoinAddress(
    address,
  ): Promise<{ isvalid: boolean; error: string }> {
    try {
      return this.syscoinRpcClient
        .callRpc<{ isvalid: boolean; error: string }>('validateaddress', [
          address,
        ])
        .call();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
