import { Component } from '@angular/core';
import { FormComponentBase } from "../../../../shared/classes/form-component.base";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { GymRoom } from "../../../../shared/actions/gym-room.actions";
import { AddGymRoomViewModel } from "../../../../shared/models/gym-room/payloads/add-gym-room-view.model";
import { Dimensions } from "../../../../shared/classes/dimensions";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-add-gym-room',
  templateUrl: './add-gym-room.component.html'
})
export class AddGymRoomComponent extends FormComponentBase {

  public constructor(
    formBuilder: FormBuilder,
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super(formBuilder.group({
      gymObjectId: ['', Validators.required],
      name: ['', Validators.required],
      width: [10, Validators.required],
      height: [10, Validators.required]
    }))
  }

  public onSubmit(): void {
    const payload: AddGymRoomViewModel = {
      name: this.getValue('name'),
      gymObjectId: this.getValue('gymObjectId'),
      dimensions: new Dimensions(this.getValue('height'), this.getValue('width'))
    }

    this._store.dispatch(new GymRoom.AddRoom(payload)).subscribe(() => {
      this._notificationService.notifyGymRoomAdded();
    })
  }

}
