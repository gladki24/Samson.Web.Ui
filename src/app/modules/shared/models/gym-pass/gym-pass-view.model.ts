export class GymPassViewModel {

  public id: string;
  public name: string;
  public price: number;
  public duration: number;

  public constructor(info: GymPassViewModel) {
    this.id = info.id;
    this.name = info.name;
    this.price = info.price;
    this.duration = info.duration;
  }
}
