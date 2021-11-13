import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SyscoinRpcClient } from '@syscoin/syscoin-js';
import { VoteDto } from './dtos/vote.dto';
import { Gobject_submitDto } from './dtos/gobject_submit.dto';
import { Gobject_checkDto } from './dtos/gobject_check.dto';
import { Gobject_prepareDto } from './dtos/gobject_prepare.dto';

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

  async gobjectCheck(gobject: Gobject_checkDto): Promise<unknown> {
    try {
      return this.syscoinRpcClient
        .callRpc('gobject_check', [Object.values(gobject)])
        .call();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async gobjectPrepare(gobject: Gobject_prepareDto): Promise<unknown> {
    try {
      return this.syscoinRpcClient.callRpc('gobject_submit', [
        Object.values(gobject),
      ]);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async gobjectSubmit(gobject: Gobject_submitDto): Promise<unknown> {
    try {
      return this.syscoinRpcClient.callRpc('gobject_prepare', [
        Object.values(gobject),
      ]);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async voteRaw(vote: VoteDto): Promise<unknown> {
    try {
      return this.syscoinRpcClient
        .callRpc('voteraw', [Object.values(vote)])
        .call();
    } catch (err) {}
  }
}
