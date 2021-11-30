import { Component } from '@angular/core';
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { ExerciseMachineType } from "../../../../shared/enums/exercise-machine-type.enum";

@Component({
  selector: 'app-exercise-machine-type-check-box',
  templateUrl: './exercise-machine-type-check-box.component.html'
})
export class ExerciseMachineTypeCheckBoxComponent extends ReactiveInputBase<ExerciseMachineType> {

  public readonly types = [
    {
      name: 'Ławeczka',
      value: ExerciseMachineType.Bench
    },
    {
      name: 'Sztanga',
      value: ExerciseMachineType.BarBell
    },
    {
      name: 'Maszyna do dippów',
      value: ExerciseMachineType.DippingBar
    },
    {
      name: 'Hantle',
      value: ExerciseMachineType.DumBell
    },
    {
      name: 'Maszyna do wyciskania nogami',
      value: ExerciseMachineType.LegPress
    },
    {
      name: 'Rack',
      value: ExerciseMachineType.Rack
    }
  ]

}
