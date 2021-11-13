import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ProposalObjectInformation,
  ProposalObjectInformationSchema,
} from './ProposalObjectInformation';
import { ProposalPrepare, ProposalPrepareSchema } from './proposalPrepare';
import { ProposalSubmit, ProposalSubmitSchema } from './ProposalSubmit';

export type ProposalCommandsDocument = ProposalCommands & Document;

@Schema({ timestamps: true })
export class ProposalCommands {
  @Prop({ required: true, Type: ProposalObjectInformationSchema })
  object_information: ProposalObjectInformation;

  @Prop({ Type: ProposalPrepareSchema })
  command_prepare: ProposalPrepare;

  @Prop({ required: true, Type: ProposalSubmitSchema })
  command_submit: ProposalSubmit;
}

export const ProposalCommandsSchema =
  SchemaFactory.createForClass(ProposalCommands);
