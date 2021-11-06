import { IsString, Matches } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  votingAddress: string;

  @IsString()
  VotingKey: string;

  @IsString()
  @Matches(/-0|-1/, {
    message: 'Master node tx is invalid',
  })
  MasterNodeTxId: string;
}
