import { Injectable } from '@nestjs/common';
import { SyscoinRpcService } from '../syscoin-rpc/syscoin-rpc.service';

@Injectable()
export class StatsService {
  constructor(private syscoinRpcService: SyscoinRpcService) {}

  countMasterNodes() {
    return this.syscoinRpcService.countMasterNodes();
  }
}
