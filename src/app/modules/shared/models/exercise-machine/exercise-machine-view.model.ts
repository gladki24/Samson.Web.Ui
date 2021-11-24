import { ExerciseMachineType } from "../../enums/exercise-machine-type.enum";
import { GymObjectViewModel } from "../gym-object/gym-object-view.model";

export class ExerciseMachineViewModel {

  public id: string;
  public code: string;
  public name: string;
  public type: ExerciseMachineType;
  public localizationGymObject: GymObjectViewModel;

  public constructor(info: ExerciseMachineViewModel) {
    this.id = info.id;
    this.code = info.code;
    this.name = info.name;
    this.type = info.type;
    this.localizationGymObject = new GymObjectViewModel(info.localizationGymObject);
  }
}
