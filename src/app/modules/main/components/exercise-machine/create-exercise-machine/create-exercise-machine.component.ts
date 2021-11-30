import { Component } from '@angular/core';
import { CreateExerciseMachineViewModel } from "../../../../shared/models/exercise-machine/payloads/create-exercise-machine-view.model";
import { MainNotificationService } from "../../../services/notification.service";
import { Store } from "@ngxs/store";
import { ExerciseMachine } from "../../../../shared/actions/exercise-machine.actions";

@Component({
  selector: 'app-create-exercise-machine',
  templateUrl: './create-exercise-machine.component.html'
})
export class CreateExerciseMachineComponent {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) { }

  public createMachine(viewModel: CreateExerciseMachineViewModel): void {

    this._store.dispatch(new ExerciseMachine.Create(viewModel)).subscribe(() => {
      this._notificationService.notifyExerciseMachineCreated();
    });
  }

}
