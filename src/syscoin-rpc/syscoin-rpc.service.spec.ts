import { Test, TestingModule } from '@nestjs/testing';
import { SyscoinRpcService } from './syscoin-rpc.service';

describe('SyscoinRpcService', () => {
  let service: SyscoinRpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyscoinRpcService],
    }).compile();

    service = module.get<SyscoinRpcService>(SyscoinRpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
