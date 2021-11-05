import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';
export type AddressDocument = Address & Document;

@Schema({ timestamps: true })
export class Address {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({
    type: String,
    index: true,
    required: true,
    unique: true,
  })
  id: string;

  @Prop({ type: String })
  label: string;

  @Prop({ type: String })
  votingAddress: string;

  @Prop({ type: String })
  VotingKey: string;

  @Prop({ type: String })
  MasterNodeTxId: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
