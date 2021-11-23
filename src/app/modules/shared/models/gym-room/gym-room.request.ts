import { Dimensions } from "../../classes/dimensions";

export class GymRoomRequest {
  public constructor(
    public readonly name: string,
    public readonly dimensions: Dimensions
  ) {
  }
}
