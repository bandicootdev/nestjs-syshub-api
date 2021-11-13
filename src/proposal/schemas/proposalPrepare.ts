import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProposalPrepareDocument = ProposalPrepare & Document;

@Schema({ timestamps: true })
export class ProposalPrepare {
  @Prop({ type: String })
  command: string;
}

export const ProposalPrepareSchema =
  SchemaFactory.createForClass(ProposalPrepare);
