import { Module } from '@nestjs/common';
import { ProposalService } from './controllers/proposal.service';
import { ProposalController } from './services/proposal.controller';
import { SyscoinRpcModule } from '../syscoin-rpc/syscoin-rpc.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposal, ProposalSchema } from './schemas/proposal.schema';
import {
  ProposalCommands,
  ProposalCommandsSchema,
} from './schemas/proposalCommands.schema';
import {
  ProposalObjectInformation,
  ProposalObjectInformationSchema,
} from './schemas/ProposalObjectInformation';
import {
  ProposalPrepare,
  ProposalPrepareSchema,
} from './schemas/proposalPrepare';
import { ProposalSubmit, ProposalSubmitSchema } from './schemas/ProposalSubmit';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Proposal.name,
        schema: ProposalSchema,
      },
      {
        name: ProposalCommands.name,
        schema: ProposalCommandsSchema,
      },
      {
        name: ProposalObjectInformation.name,
        schema: ProposalObjectInformationSchema,
      },
      {
        name: ProposalPrepare.name,
        schema: ProposalPrepareSchema,
      },
      {
        name: ProposalSubmit.name,
        schema: ProposalSubmitSchema,
      },
    ]),
    SyscoinRpcModule,
  ],
  providers: [ProposalService],
  controllers: [ProposalController],
})
export class ProposalModule {}
