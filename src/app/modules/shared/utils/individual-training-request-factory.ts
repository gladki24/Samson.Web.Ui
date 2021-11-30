import { CreateIndividualTrainingRequest } from "../models/individual-training/create-individual-training.request";
import { UpdateIndividualTrainingRequest } from "../models/individual-training/update-individual-training.request";
import { CancelIndividualTrainingRequest } from "../models/individual-training/cancel-individual-training.request";
import { ConfirmIndividualTrainingRequest } from "../models/individual-training/confirm-individual-training.request";
import { EnrollIndividualTrainingRequest } from "../models/individual-training/enroll-individual-training.request";

export namespace IndividualTrainingRequestFactory {

  export const GetCreateIndividualTrainingRequest = (
    personalTrainerId: string,
    gymObjectId: string,
    startDate: Date,
    endDate: Date,
    clientId?: string
  ): CreateIndividualTrainingRequest =>
    new CreateIndividualTrainingRequest(personalTrainerId, gymObjectId, startDate, endDate, clientId)

  export const GetUpdateIndividualTrainingRequest = (
    id: string,
    gymObjectId: string,
    startDate: Date,
    endDate: Date
  ): UpdateIndividualTrainingRequest =>
    new UpdateIndividualTrainingRequest(id, startDate, endDate, gymObjectId)

  export const GetCancelIndividualTrainingRequest = (
    id: string
  ): CancelIndividualTrainingRequest => new CancelIndividualTrainingRequest(id);

  export const GetConfirmIndividualTrainingRequest = (
    id: string
  ): ConfirmIndividualTrainingRequest => new ConfirmIndividualTrainingRequest(id)

  export const GetEnrollIndividualTrainingRequest = (
    id: string,
    clientId: string
  ): EnrollIndividualTrainingRequest => new EnrollIndividualTrainingRequest(id, clientId)
}
