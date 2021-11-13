import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VoteDto {
  @IsNotEmpty()
  @IsString()
  transactionHash: string;

  @IsNotEmpty()
  @IsNumber()
  transactionIndex: string;

  @IsNotEmpty()
  @IsString()
  governanceHash: string;

  @IsNotEmpty()
  @IsString()
  signal: string;

  @IsNotEmpty()
  @IsString()
  vote: string;

  @IsNotEmpty()
  @IsNumber()
  time: number;

  @IsNotEmpty()
  @IsString()
  signature: string;
}
