import { AddGymRoomViewModel } from "../models/gym-room/payloads/add-gym-room-view.model";
import { RemoveGymRoomViewModel } from "../models/gym-room/payloads/remove-gym-room-view.model";

export namespace GymRoom {
  export class AddRoom {
    public constructor(public readonly payload: AddGymRoomViewModel) {
    }
  }

  export class RemoveRoom {
    public constructor(public readonly payload: RemoveGymRoomViewModel) {
    }
  }
}
