import { Component } from '@angular/core';
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { Observable, of } from "rxjs";
import { GymRoomViewModel } from "../../../../shared/models/gym-room/gym-room-view.model";
import { Store } from "@ngxs/store";
import { GymRoom } from "../../../../shared/actions/gym-room.actions";
import { GymRoomState } from "../../../../shared/states/gym-rooms.state";

@Component({
  selector: 'app-gym-room-select-box',
  templateUrl: './gym-room-select-box.component.html'
})
export class GymRoomSelectBoxComponent extends ReactiveInputBase<string> {

  public readonly rooms$: Observable<GymRoomViewModel[]> = of([]);

  public constructor(store: Store) {
    super();
    store.dispatch(new GymRoom.GetAll());
    this.rooms$ = store.select(GymRoomState.gymRooms);
  }

}
