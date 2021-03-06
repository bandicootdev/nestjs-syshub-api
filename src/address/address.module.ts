import { Module } from '@nestjs/common';
import { AddressService } from './services/address.service';
import { AddressController } from './controllers/address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from './address.schema';
import { SyscoinRpcModule } from '../syscoin-rpc/syscoin-rpc.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Address.name,
        schema: AddressSchema,
      },
    ]),
    SyscoinRpcModule,
  ],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
