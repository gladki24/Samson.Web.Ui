import { Component } from '@angular/core';
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { Observable, of } from "rxjs";
import { GymRoomViewModel } from "../../../../shared/models/gym-room/gym-room-view.model";

@Component({
  selector: 'app-gym-room-select-box',
  templateUrl: './gym-room-select-box.component.html',
  styleUrls: ['./gym-room-select-box.component.scss']
})
export class GymRoomSelectBoxComponent extends ReactiveInputBase<string> {

  public readonly rooms$: Observable<GymRoomViewModel[]> = of([]);

  public constructor() {
    super();
  }

}
