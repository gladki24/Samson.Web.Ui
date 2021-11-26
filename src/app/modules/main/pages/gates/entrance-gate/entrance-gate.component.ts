import { Component } from '@angular/core';
import { GateComponentBase } from "../gate-component.base";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngxs/store";
import { Gate } from "../../../../../actions/gate.actions";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-entrance-gate',
  templateUrl: './entrance-gate.component.html'
})
export class EntranceGateComponent extends GateComponentBase {

  public constructor(
    store: Store,
    route: ActivatedRoute,
    private readonly _notificationService: MainNotificationService
  ) {
    super('Bramka wejściowa', 'Wprowadź nazwę klienta i wejdź na siłownię', store, route);
  }

  public onEntry(): void {
    this.store.dispatch(new Gate.Entry(this.gymObject, this.userId))
      .subscribe(() => {
        this._notificationService.notifyGateCross()
        this.store.dispatch(new Gate.Clear())
        this.clear();
      });
  }
}
