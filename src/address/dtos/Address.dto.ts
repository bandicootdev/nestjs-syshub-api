import { Exclude, Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class AddressDto {
  @Exclude()
  _id: ObjectId;

  @Exclude()
  __v: number;

  @Expose()
  id: string;

  @Expose()
  label: string;

  @Expose()
  votingAddress: string;

  @Expose()
  VotingKey: string;

  @Expose()
  MasterNodeTxId: string;
}
