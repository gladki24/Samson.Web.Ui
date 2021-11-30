import { Component } from '@angular/core';
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { Store } from "@ngxs/store";
import { ExerciseMachineState } from "../../../../shared/states/exercise-machine-state.service";
import { ExerciseMachineViewModel } from "../../../../shared/models/exercise-machine/exercise-machine-view.model";
import { ExerciseMachine } from "../../../../shared/actions/exercise-machine.actions";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-exercise-machine-select-box',
  templateUrl: './exercise-machine-select-box.component.html'
})
export class ExerciseMachineSelectBoxComponent extends ReactiveInputBase<string> {

  public readonly machines$: Observable<ExerciseMachineViewModel[]> = of([]);

  public constructor(store: Store) {
    super();
    store.dispatch(new ExerciseMachine.GetAll());
    this.machines$ = store.select(ExerciseMachineState.allMachines)
  }
}
