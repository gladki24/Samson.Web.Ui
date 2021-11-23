export class UpdateIndividualTrainingRequest {
  public constructor(
    public readonly individualTrainingId: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly gymObjectId: string
  ) {
  }
}
