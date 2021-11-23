export class CovidConfigurationRequest {
  public constructor(
    public readonly personFactorPerMeter: number,
    public readonly isActive: boolean
  ) {
  }
}
