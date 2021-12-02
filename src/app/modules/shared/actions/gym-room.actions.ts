import { AddGymRoomViewModel } from "../models/gym-room/payloads/add-gym-room-view.model";
import { RemoveGymRoomViewModel } from "../models/gym-room/payloads/remove-gym-room-view.model";

export namespace GymRoom {
  export class GetAll {
    public static type = '[GymRoom] GetAll';
  }

  export class AddRoom {
    public static type = '[GymRoom] AddRoom';

    public constructor(public readonly payload: AddGymRoomViewModel) {
    }
  }

  export class RemoveRoom {
    public static type = '[GymRoom] RemoveRoom';

    public constructor(public readonly payload: RemoveGymRoomViewModel) {
    }
  }
}
