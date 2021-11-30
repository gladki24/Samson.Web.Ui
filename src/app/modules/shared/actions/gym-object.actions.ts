import { CreateGymObjectViewModel } from "../models/gym-object/payloads/create-gym-object-view.model";
import { UpdateGymObjectViewModel } from "../models/gym-object/payloads/update-gym-object-view.model";
import { DeleteGymObjectViewModel } from "../models/gym-object/payloads/delete-gym-object-view.model";

export namespace GymObject {
  export class Create {
    public constructor(public readonly payload: CreateGymObjectViewModel) {
    }
  }

  export class Update {
    public constructor(public readonly payload: UpdateGymObjectViewModel) {
    }
  }

  export class Delete {
    public constructor(public readonly payload: DeleteGymObjectViewModel) {
    }
  }
}
