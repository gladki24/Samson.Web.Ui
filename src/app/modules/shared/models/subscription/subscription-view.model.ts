export class SubscriptionViewModel {
  public id: string;
  public startDate: Date;
  public endDate: Date;
  public gymPassTypeId: string;

  public constructor(info: SubscriptionViewModel) {
    this.id = info.id;
    this.startDate = new Date(info.startDate);
    this.endDate = new Date(info.endDate);
    this.gymPassTypeId = info.gymPassTypeId;
  }
}
