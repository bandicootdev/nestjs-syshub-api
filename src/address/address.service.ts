import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from './address.schema';
import { Model } from 'mongoose';
import { CreateAddressDto } from './dtos/create-address.dto';
import { nanoid } from 'nanoid';
import { SyscoinRpcService } from '../syscoin-rpc/syscoin-rpc.service';
import { UpdateAddressDto } from './dtos/update-address.dto';

export interface IAddressService {
  findAllAddress(): Promise<AddressDocument[]>;
  findOneAddress(id: string): Promise<AddressDocument>;
  createOneAddress(
    createOneAddress: CreateAddressDto,
  ): Promise<AddressDocument>;
  updateOneAddress(
    id: string,
    updateOneAddressDto: UpdateAddressDto,
  ): Promise<AddressDocument>;
  deleteOneAddress(id: string): Promise<AddressDocument>;
}

@Injectable()
export class AddressService implements IAddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
    private syscoinRpcService: SyscoinRpcService,
  ) {}

  findAllAddress(): Promise<AddressDocument[]> {
    try {
      return this.addressModel.find().exec();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findOneAddress(id: string): Promise<AddressDocument> {
    let address;
    try {
      address = await this.addressModel.findOne({ id }).exec();
    } catch (err) {
      throw new InternalServerErrorException();
    }
    if (!address) {
      throw new NotFoundException('address not fount');
    }
    return address;
  }

  async createOneAddress(
    createOneAddress: CreateAddressDto,
  ): Promise<AddressDocument> {
    const votingAddress = await this.syscoinRpcService.validateSysCoinAddress(
      createOneAddress.votingAddress,
    );
    if (!votingAddress.isvalid) {
      throw new BadRequestException(votingAddress.error);
    }
    try {
      const addressSnapShot = new this.addressModel({
        ...createOneAddress,
        id: nanoid(),
      });
      return await addressSnapShot.save();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateOneAddress(
    id: string,
    updateOneAddressDto: UpdateAddressDto,
  ): Promise<AddressDocument> {
    await this.findOneAddress(id);
    try {
      return this.addressModel
        .findOneAndUpdate(
          { id },
          { ...updateOneAddressDto },
          { returnOriginal: false },
        )
        .exec();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async deleteOneAddress(id: string): Promise<AddressDocument> {
    await this.findOneAddress(id);
    try {
      return this.addressModel.findOneAndRemove({ id }).exec();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
