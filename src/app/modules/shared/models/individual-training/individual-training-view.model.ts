import { IndividualTrainingType } from "../../enums/individual-training-type.enum";

export class IndividualTrainingViewModel {

  public get isOpen(): boolean {
    return this.type === IndividualTrainingType.Open;
  }

  public get isPending(): boolean {
    return this.type === IndividualTrainingType.Pending;
  }

  public get isCancellable(): boolean {
    return ![
      IndividualTrainingType.Confirmed,
      IndividualTrainingType.Cancelled
    ].includes(this.type);
  }

  public id: string;
  public personalTrainerId: string;
  public clientId: string;
  public gymObjectId: string;
  public startDate: Date;
  public endDate: Date;
  public type: IndividualTrainingType

  public constructor(info: IndividualTrainingViewModel) {
    this.id = info.id;
    this.personalTrainerId = info.personalTrainerId;
    this.clientId = info.clientId;
    this.gymObjectId = info.gymObjectId;
    this.startDate = new Date(info.startDate);
    this.endDate = new Date(info.endDate);
    this.type = info.type;
  }
}
