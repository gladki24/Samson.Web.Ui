import { CreateExerciseMachineRequest } from "../models/exercise-machine/create-exercise-machine.request";
import { ExerciseMachineType } from "../enums/exercise-machine-type.enum";
import { UpdateExerciseMachineRequest } from "../models/exercise-machine/update-exercise-machine.request";
import { DeleteExerciseMachineViewModel } from "../models/exercise-machine/payloads/delete-exercise-machine-view.model";
import { DeleteExerciseMachineRequest } from "../models/exercise-machine/delete-exercise-machine.request";

export namespace ExerciseMachineRequestFactory {
  export const getCreateExerciseMachine = (
    code: string,
    name: string,
    type: ExerciseMachineType,
    localization: string
  ): CreateExerciseMachineRequest =>
    new CreateExerciseMachineRequest(code, name, type, localization)

  export const getUpdateExerciseMachine = (
    id: string,
    code: string,
    name: string,
    type: ExerciseMachineType,
    localization: string
  ): UpdateExerciseMachineRequest =>
    new UpdateExerciseMachineRequest(id, code, name, type, localization)

  export const getDeleteExerciseMachine = (
    id: string
  ): DeleteExerciseMachineViewModel =>
    new DeleteExerciseMachineRequest(id)
}
