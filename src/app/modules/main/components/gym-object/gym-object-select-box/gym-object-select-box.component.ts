import { Component } from '@angular/core';
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { Observable, of } from "rxjs";
import { GymObjectViewModel } from "../../../../shared/models/gym-object/gym-object-view.model";
import { Store } from "@ngxs/store";
import { GymObject } from "../../../../shared/actions/gym-object.actions";
import { GymObjectState } from "../../../../shared/states/gym-object.state";

@Component({
  selector: 'app-gym-object-select-box',
  templateUrl: './gym-object-select-box.component.html'
})
export class GymObjectSelectBoxComponent extends ReactiveInputBase<string> {

  public gymObjects$: Observable<GymObjectViewModel[]> = of([]);

  public constructor(store: Store) {
    super();
    store.dispatch(new GymObject.GetAll());
    this.gymObjects$ = store.select(GymObjectState.gymObjects);
  }

}
