export class EnrollIndividualTrainingRequest {
  public constructor(
    public readonly individualTrainingId: string,
    public readonly clientId: string
  ) {
  }
}
