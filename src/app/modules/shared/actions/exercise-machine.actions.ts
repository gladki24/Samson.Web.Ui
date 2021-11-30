import { CreateExerciseMachineViewModel } from "../models/exercise-machine/payloads/create-exercise-machine-view.model";
import { UpdateExerciseMachineViewModel } from "../models/exercise-machine/payloads/update-exercise-machine-view.model";
import { DeleteExerciseMachineViewModel } from "../models/exercise-machine/payloads/delete-exercise-machine-view.model";

export namespace ExerciseMachine {

  export class GetAll {
    public static readonly type = '[ExerciseMachine] GetAll';
  }

  export class Get {
    public static readonly type = '[ExerciseMachine] Get';

    public constructor(public readonly payload: string) {
    }
  }

  export class Create {
    public static readonly type = '[ExerciseMachine] Create';

    public constructor(public readonly payload: CreateExerciseMachineViewModel) {
    }
  }

  export class Update {
    public static readonly type = '[ExerciseMachine] Update'

    public constructor(public readonly payload: UpdateExerciseMachineViewModel) {
    }
  }

  export class Delete {
    public static readonly type ='[ExerciseMachine] Delete'

    public constructor(public readonly payload: DeleteExerciseMachineViewModel) {
    }
  }
}
