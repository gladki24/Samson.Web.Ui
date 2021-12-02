import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { MainNotificationService } from "../../../services/notification.service";
import { GymRoom } from "../../../../shared/actions/gym-room.actions";

@Component({
  selector: 'app-remove-gym-room',
  templateUrl: './remove-gym-room.component.html'
})
export class RemoveGymRoomComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      gymObjectId: ['', Validators.required],
      gymRoomId: ['', Validators.required]
    }))
  }

  public deleteGymObject(): void {
    this._store.dispatch(new GymRoom.RemoveRoom(this.form.value))
      .subscribe(() => this._notificationService.notifyGymRemoved())
  }
}
