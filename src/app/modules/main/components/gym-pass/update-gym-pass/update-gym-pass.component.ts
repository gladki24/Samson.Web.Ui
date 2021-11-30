import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { MainNotificationService } from "../../../services/notification.service";
import { Store } from "@ngxs/store";
import { GymPassState } from "../../../../shared/states/gym-pass.state";
import { map } from "rxjs/operators";
import { GymPassViewModel } from "../../../../shared/models/gym-pass/gym-pass-view.model";
import { GymPass } from "../../../../shared/actions/gym-pass.actions";
import { UpdateGymPassViewModel } from "../../../../shared/models/gym-pass/payloads/update-gym-pass-view.model";


@Component({
  selector: 'app-update-gym-pass',
  templateUrl: './update-gym-pass.component.html'
})
export class UpdateGymPassComponent extends FormComponentBase {

  public gymPass?: GymPassViewModel;

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      id: ['', Validators.required],
    }))
  }

  public loadData(): void {
    const id = this.getValue<string>('id');
    this._store.select(GymPassState.gymPass).pipe(
      map(fn => fn(id))
    ).subscribe(gymPass => this.gymPass = gymPass)
  }

  public deleteGymPass(): void {
    this._store.dispatch(new GymPass.Delete({
      id: this.getValue('id')
    })).subscribe(() => {
      this._notificationService.notifyGymPassExtended()
    })
  }

  public updateGymPass(viewModel: UpdateGymPassViewModel): void {
    viewModel.id = this.gymPass?.id as string;
    this._store.dispatch(new GymPass.Update(viewModel)).subscribe(() => {
      this._notificationService.notifyGymPassUpdated();
    })
  }
}
