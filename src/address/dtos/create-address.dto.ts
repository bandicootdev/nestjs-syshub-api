import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsString()
  votingAddress: string;

  @IsNotEmpty()
  @IsString()
  VotingKey: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/-0|-1/, {
    message: 'Master node tx is invalid',
  })
  MasterNodeTxId: string;
}
