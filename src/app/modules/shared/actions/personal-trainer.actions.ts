import { CreatePersonalTrainerViewModel } from "../models/personal-trainer/create-personal-trainer-view.model";
import { UpdatePersonalTrainerViewModel } from "../models/personal-trainer/update-personal-trainer-view.model";
import { DeletePersonalTrainerViewModel } from "../models/personal-trainer/delete-personal-trainer-view.model";

export namespace PersonalTrainer {
  export class Get {
    static readonly type = '[PersonalTrainer] Get';

    public constructor(public payload: string) {
    }
  }

  export class Create {
    static readonly type = '[PersonalTrainer] Create';

    public constructor(
      public readonly payload: CreatePersonalTrainerViewModel
    ) {
    }
  }

  export class Update {
    static readonly type = '[PersonalTrainer] Update';

    public constructor(
      public readonly payload: UpdatePersonalTrainerViewModel
    ) {
    }
  }

  export class Delete {
    static readonly type = '[PersonalTrainer] Delete';

    public constructor(
      public readonly payload: DeletePersonalTrainerViewModel
    ) {
    }
  }
}
