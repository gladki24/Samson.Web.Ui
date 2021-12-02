import { AddGymRoomRequest } from "../models/gym-room/add-gym-room.request";
import { Dimensions } from "../classes/dimensions";
import { RemoveGymRoomRequest } from "../models/gym-room/remove-gym-room.request";

export namespace GymRoomRequestFactory {
  export const getAddGymRoomRequest = (
    gymObjectId: string,
    name: string,
    dimensions: Dimensions
  ): AddGymRoomRequest =>
    new AddGymRoomRequest(gymObjectId, name, dimensions)

  export const getRemoveGymRoomRequest = (
    gymObjectId: string,
    gymRoomId: string
  ): RemoveGymRoomRequest =>
    new RemoveGymRoomRequest(gymObjectId, gymRoomId);
}
