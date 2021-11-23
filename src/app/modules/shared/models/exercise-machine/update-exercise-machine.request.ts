import { ExerciseMachineType } from "../../enums/exercise-machine-type.enum";

export class UpdateExerciseMachineRequest {
  public constructor(
    public readonly id: string,
    public readonly code: string,
    public readonly name: string,
    public readonly type: ExerciseMachineType,
    public readonly localizationGymObjectId: string
  ) {
  }
}
