import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document, ObjectId } from 'mongoose';
import {
  ProposalCommands,
  ProposalCommandsSchema,
} from './proposalCommands.schema';

export type ProposalDocument = Proposal & Document;

@Schema({ timestamps: true })
export class Proposal {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({
    type: String,
    index: true,
    required: true,
    unique: true,
  })
  id: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  transactionId: string;

  @Prop({ required: true, type: Number })
  type: number;

  @Prop({ required: true, type: Number })
  first_epoch: number;

  @Prop({ required: true, type: Number })
  end_epoch: number;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: Boolean, default: false })
  complete: boolean;

  @Prop({ required: true, type: Boolean, default: false })
  hidden: boolean;

  @Prop({ required: true, type: Number })
  number_of_payments: number;

  @Prop({ required: true, type: Number })
  payment_amount: number;

  @Prop({ required: true, type: String })
  payment_address: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: ProposalCommandsSchema })
  commands: ProposalCommands;
}
export const ProposalSchema = SchemaFactory.createForClass(Proposal);
