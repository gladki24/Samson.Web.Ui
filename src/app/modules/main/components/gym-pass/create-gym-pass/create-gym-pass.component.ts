import { Component } from '@angular/core';
import { MainNotificationService } from "../../../services/notification.service";
import { Store } from "@ngxs/store";
import { CreateGymPassViewModel } from "../../../../shared/models/gym-pass/payloads/create-gym-pass-view.model";
import { GymPass } from "../../../../shared/actions/gym-pass.actions";

@Component({
  selector: 'app-create-gym-pass',
  templateUrl: './create-gym-pass.component.html'
})
export class CreateGymPassComponent {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) { }

  public createGymPass(viewModel: CreateGymPassViewModel): void {
    this._store.dispatch(new GymPass.Create(viewModel)).subscribe(() => {
      this._notificationService.notifyGymPassCreated();
    });
  }

}
