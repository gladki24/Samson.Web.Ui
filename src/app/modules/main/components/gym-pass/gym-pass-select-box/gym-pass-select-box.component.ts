import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { GymPassViewModel } from "../../../../shared/models/gym-pass/gym-pass-view.model";
import { Store } from "@ngxs/store";
import { ReactiveInputBase } from "../../../../shared/classes/reactive-input.base";
import { GymPass } from "../../../../shared/actions/gym-pass.actions";
import { GymPassState } from "../../../../shared/states/gym-pass.state";

@Component({
  selector: 'app-gym-pass-select-box',
  templateUrl: './gym-pass-select-box.component.html'
})
export class GymPassSelectBoxComponent extends ReactiveInputBase<string> {

  public gymPasses$: Observable<GymPassViewModel[]> = of([]);

  public constructor(store: Store) {
    super();
    store.dispatch(new GymPass.GetAll());
    this.gymPasses$ = store.select(GymPassState.gymPasses)
  }
}
