import { ExerciseMachineType } from "../../../enums/exercise-machine-type.enum";


export interface UpdateExerciseMachineViewModel {
  id: string;
  code: string;
  name: string;
  type: ExerciseMachineType;
  localizationGymObjectId: string
}
