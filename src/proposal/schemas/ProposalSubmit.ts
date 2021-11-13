import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProposalSubmitDocument = ProposalSubmit & Document;

@Schema({ timestamps: true })
export class ProposalSubmit {
  @Prop({ type: String })
  command: string;
}

export const ProposalSubmitSchema =
  SchemaFactory.createForClass(ProposalSubmit);
