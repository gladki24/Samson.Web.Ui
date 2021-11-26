export class EntranceValidationInfoViewModel {
  public readonly currentNumberOfClients: number;
  public readonly hasValidPass: boolean;
  public readonly isGymFull: boolean;
  public readonly maximumNumberOfClients: number;

  public constructor(info: EntranceValidationInfoViewModel) {
    this.currentNumberOfClients = info.currentNumberOfClients;
    this.hasValidPass = info.hasValidPass;
    this.isGymFull = info.isGymFull;
    this.maximumNumberOfClients = info.maximumNumberOfClients;
  }
}
