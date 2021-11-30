import { DeleteGymPassViewModel } from "../models/gym-pass/payloads/delete-gym-pass-view.model";
import { UpdateGymPassViewModel } from "../models/gym-pass/payloads/update-gym-pass-view.model";
import { CreateGymPassViewModel } from "../models/gym-pass/payloads/create-gym-pass-view.model";

export namespace GymPass {

  export class GetAll {
    public static readonly type = '[GymPass] GetAll';
  }

  export class Create {
    public static readonly type = '[GymPass] Create';

    public constructor(public readonly payload: CreateGymPassViewModel) {
    }
  }

  export class Update {
    public static readonly type = '[GymPass] Update';

    public constructor(public readonly payload: UpdateGymPassViewModel) {
    }
  }

  export class Delete {
    public static readonly type = '[GymPass] Delete';

    public constructor(public readonly payload: DeleteGymPassViewModel) {
    }
  }
}
