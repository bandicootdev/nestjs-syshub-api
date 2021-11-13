import { IsNotEmpty, IsString } from 'class-validator';

// @IsHexadecimal()

export class Gobject_checkDto {
  @IsNotEmpty()
  @IsString()
  hex: string;
}
