import { CreateGymObjectViewModel } from "../models/gym-object/payloads/create-gym-object-view.model";
import { UpdateGymObjectViewModel } from "../models/gym-object/payloads/update-gym-object-view.model";
import { DeleteGymObjectViewModel } from "../models/gym-object/payloads/delete-gym-object-view.model";

export namespace GymObject {

  export class GetAll {
    public static readonly type = '[GymObject] GetAll';
  }

  export class Create {
    public static readonly type = '[GymObject] Create';

    public constructor(public readonly payload: CreateGymObjectViewModel) {
    }
  }

  export class Update {
    public static readonly type = '[GymObject] Update';

    public constructor(public readonly payload: UpdateGymObjectViewModel) {
    }
  }

  export class Delete {
    public static readonly type = '[GymObject] Delete';

    public constructor(public readonly payload: DeleteGymObjectViewModel) {
    }
  }
}
