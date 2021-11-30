export class CreateIndividualTrainingRequest {
  public constructor(
    public readonly personalTrainerId: string,
    public readonly gymObjectId: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly clientId?: string
  ) {
  }
}
