import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class Gobject_submitDto {
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

  @IsNotEmpty()
  @IsString()
  @Matches(/-0|-1/, {
    message: 'Master node tx is invalid',
  })
  MasterNodeTxId: string;
}
