export class CovidConfigurationViewModel {
  public id: string;
  public personFactorPerMeter: number;
  public isActive: boolean;

  public constructor(info: CovidConfigurationViewModel) {
    this.id = info.id;
    this.personFactorPerMeter = info.personFactorPerMeter;
    this.isActive = info.isActive;
  }
}
