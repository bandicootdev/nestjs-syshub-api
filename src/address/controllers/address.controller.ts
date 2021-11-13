import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { AddressDto } from '../dtos/Address.dto';
import { Serialize } from '../../interceptors/serialize.interceptor';
import { UpdateAddressDto } from '../dtos/update-address.dto';

@Controller('address')
@Serialize(AddressDto)
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAllAddress() {
    return this.addressService.findAllAddress();
  }

  @Get('/:id')
  getOneAddress(@Param('id') id: string) {
    return this.addressService.findOneAddress(id);
  }

  @Post()
  createOneAddress(@Body() body: CreateAddressDto) {
    return this.addressService.createOneAddress(body);
  }

  @Patch('/:id')
  updateOneAddress(@Param('id') id: string, @Body() body: UpdateAddressDto) {
    return this.addressService.updateOneAddress(id, body);
  }

  @Delete('/:id')
  destroyAddress(@Param('id') id: string) {
    return this.addressService.deleteOneAddress(id);
  }
}
