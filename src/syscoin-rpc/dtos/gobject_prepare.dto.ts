import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Gobject_prepareDto {
  @IsNotEmpty()
  @IsString()
  parentHash: string;

  @IsNotEmpty()
  @IsString()
  revision: string;

  @IsNotEmpty()
  @IsNumber()
  time: number;

  @IsNotEmpty()
  @IsString()
  hex: string;
}
