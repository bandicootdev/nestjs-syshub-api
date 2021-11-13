import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProposalObjectInformationDocument = ProposalObjectInformation &
  Document;
export class ProposalObjectInformation {
  @Prop({ required: true, type: String })
  hex: string;

  @Prop({ required: true, type: String, default: '0' })
  parentHash: string;

  @Prop({ required: true, type: String, default: '1' })
  revision: string;

  @Prop({ required: true, type: Number })
  time: number;
}

export const ProposalObjectInformationSchema = SchemaFactory.createForClass(
  ProposalObjectInformation,
);
