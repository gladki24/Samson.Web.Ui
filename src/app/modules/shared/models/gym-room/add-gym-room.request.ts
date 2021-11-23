import { Dimensions } from "../../classes/dimensions";

export class AddGymRoomRequest {
  public constructor(
    public readonly gymObjectId: string,
    public readonly name: string,
    public readonly dimensions: Dimensions
  ) {
  }
}
