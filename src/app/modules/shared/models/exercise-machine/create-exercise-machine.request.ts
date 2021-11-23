import { ExerciseMachineType } from "../../enums/exercise-machine-type.enum";

export class CreateExerciseMachineRequest {
  public constructor(
    public readonly code: string,
    public readonly name: string,
    public readonly type: ExerciseMachineType,
    public readonly localizationGymObjectId: string
  ) {
  }
}
