import { Component } from '@angular/core';
import { MainNotificationService } from "../../../services/notification.service";
import { Store } from "@ngxs/store";
import { CreateGymObjectViewModel } from "../../../../shared/models/gym-object/payloads/create-gym-object-view.model";
import { GymObject } from "../../../../shared/actions/gym-object.actions";
import { UpdateGymObjectViewModel } from "../../../../shared/models/gym-object/payloads/update-gym-object-view.model";

@Component({
  selector: 'app-create-gym-object',
  templateUrl: './create-gym-object.component.html'
})
export class CreateGymObjectComponent {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) { }


  public createGymObject(viewModel: UpdateGymObjectViewModel): void {

    const payload: CreateGymObjectViewModel = {
      name: viewModel.name,
      covidConfiguration: viewModel.covidConfiguration,
      rooms: []
    };

    this._store.dispatch(new GymObject.Create(payload)).subscribe(() => {
      this._notificationService.notifyGymObjectUpdated()
    })
  }

}
