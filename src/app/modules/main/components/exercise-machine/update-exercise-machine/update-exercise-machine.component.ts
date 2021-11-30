import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { ExerciseMachineViewModel } from "../../../../shared/models/exercise-machine/exercise-machine-view.model";
import { ExerciseMachine } from "../../../../shared/actions/exercise-machine.actions";
import { ExerciseMachineState } from "../../../../shared/states/exercise-machine-state.service";
import { map } from "rxjs/operators";
import { UpdateExerciseMachineViewModel } from "../../../../shared/models/exercise-machine/payloads/update-exercise-machine-view.model";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-update-exercise-machine',
  templateUrl: './update-exercise-machine.component.html'
})
export class UpdateExerciseMachineComponent extends FormComponentBase {

  public machine?: ExerciseMachineViewModel;

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      id: ['', Validators.required]
    }));
  }

  public loadData(): void {
    const id = this.form.value['id'];
    this._store.select(ExerciseMachineState.machine).pipe(
      map(fn => fn(id))
    ).subscribe(machine => this.machine = machine)
  }

  public deleteMachine(): void {
    this._store.dispatch(new ExerciseMachine.Delete({
      id: this.getValue('id')
    })).subscribe(() => {
      this._notificationService.notifyExerciseMachineDeleted();
    })
  }

  public updateMachine(viewModel: UpdateExerciseMachineViewModel): void {
    viewModel.id = this.machine?.id as string;
    this._store.dispatch(new ExerciseMachine.Update(viewModel)).subscribe(() => {
      this._notificationService.notifyExerciseMachineUpdated();
    })
  }
}
