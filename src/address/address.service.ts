import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from './address.schema';
import { Model } from 'mongoose';
import { CreateAddressDto } from './dtos/create-address.dto';
import { nanoid } from 'nanoid';
import { SyscoinRpcService } from '../syscoin-rpc/syscoin-rpc.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
    private syscoinRpcService: SyscoinRpcService,
  ) {}

  async createOneAddress(createOneAddress: CreateAddressDto) {
    const votingAddress = await this.syscoinRpcService.validateSysCoinAddress(
      createOneAddress.votingAddress,
    );
    if (!votingAddress.isValid) {
      throw new BadRequestException(votingAddress.error);
    }
    try {
      const addressSnapShot = new this.addressModel({
        ...createOneAddress,
        id: nanoid(),
      });
      return addressSnapShot.save();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
