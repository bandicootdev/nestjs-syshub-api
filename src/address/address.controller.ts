import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressDto } from './dtos/Address.dto';
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('address')
@Serialize(AddressDto)
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  createOneAddress(@Body() body: CreateAddressDto) {
    return this.addressService.createOneAddress(body);
  }
}
