import { Component, Input } from '@angular/core';
import { Store } from "@ngxs/store";
import { GymRoomState } from "../../../../shared/states/gym-rooms.state";
import { GymRoomViewModel } from "../../../../shared/models/gym-room/gym-room-view.model";

@Component({
  selector: 'app-gym-room-lookup',
  templateUrl: './gym-room-lookup.component.html'
})
export class GymRoomLookupComponent {

  @Input() public set gymRoomId(value: string) {
    this._gymRoomId = value;
  }

  public get gymRoomId(): string {
    return this._gymRoomId;
  }

  public get gymRoom(): GymRoomViewModel | undefined {
    return this._gymRooms.find(gymRoom => gymRoom.id === this._gymRoomId);
  }

  private _gymRoomId: string = '';
  private _gymRooms: GymRoomViewModel[] = [];

  public constructor(
    private _store: Store
  ) {
    this._gymRooms = this._store.selectSnapshot(GymRoomState.gymRooms);
  }


}
