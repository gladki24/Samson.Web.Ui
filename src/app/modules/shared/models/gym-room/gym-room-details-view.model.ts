import { Dimensions } from "../../classes/dimensions";
import { GymObjectViewModel } from "../gym-object/gym-object-view.model";

export class GymRoomDetailsViewModel {
  public id: string;
  public name: string;
  public dimensions: Dimensions;
  public gymObject: GymObjectViewModel;

  public constructor(info: GymRoomDetailsViewModel) {
    this.id = info.id;
    this.name = info.name;
    this.dimensions = new Dimensions(info.dimensions.height, info.dimensions.width);
    this.gymObject = new GymObjectViewModel(info.gymObject);
  }
}
