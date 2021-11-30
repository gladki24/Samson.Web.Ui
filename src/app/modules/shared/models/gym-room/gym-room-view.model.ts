import { Dimensions } from "../../classes/dimensions";

export class GymRoomViewModel {
  public id: string;
  public name: string;
  public dimensions: Dimensions;

  public constructor(info: GymRoomViewModel) {
    this.id = info.id;
    this.name = info.name;
    this.dimensions = new Dimensions(info.dimensions.height, info.dimensions.width);
  }
}
