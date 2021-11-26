import { Component } from '@angular/core';
import { GateComponentBase } from "../gate-component.base";
import { Store } from "@ngxs/store";
import { ActivatedRoute } from "@angular/router";
import { Gate } from "../../../../../actions/gate.actions";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-exit-gate',
  templateUrl: './exit-gate.component.html'
})
export class ExitGateComponent extends GateComponentBase {
  public constructor(
    store: Store,
    route: ActivatedRoute,
    private readonly _notificationService: MainNotificationService
  ) {
    super('Bramka wyjściowa', 'Wyjdź z siłowni', store, route);
  }

  public onExit(): void {
    this.store.dispatch(new Gate.Exit(this.gymObject, this.userId))
      .subscribe(() => {
        this._notificationService.notifyGateCross();
        this.store.dispatch(new Gate.Clear());
        this.clear();
      });
  }
}
