import { ExerciseMachineType } from "../../../enums/exercise-machine-type.enum";


export interface CreateExerciseMachineViewModel {
  code: string;
  name: string;
  type: ExerciseMachineType;
  localizationGymObjectId: string;
}
