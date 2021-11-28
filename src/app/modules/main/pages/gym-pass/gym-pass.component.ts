import { Component } from '@angular/core';
import { MainComponentBase } from "../main-component.base";
import { Store } from "@ngxs/store";
import { ClientState } from "../../../shared/states/client.state";
import { Observable } from "rxjs";
import { ClientViewModel } from "../../../shared/models/client/client-view.model";
import { GymPassViewModel } from "../../../shared/models/gym-pass/gym-pass-view.model";
import { Client } from "../../../shared/actions/client.actions";
import { MainNotificationService } from "../../services/notification.service";

@Component({
  selector: 'app-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss']
})
export class GymPassComponent extends MainComponentBase {

  public readonly client$: Observable<ClientViewModel>;
  public selectedGymPass?: GymPassViewModel;

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) {
    super('Zarządzanie karnetem', 'Sprawdź datę ważności karnetu i jeśli to konieczne przedłuż go');
    this.client$ = this._store.select(ClientState.getUser);
  }

  public addGymPassToSubscription(gymPass: GymPassViewModel): void {
    this.selectedGymPass = gymPass;
  }

  public confirmBuyGymPass(): void {
    const client = this._store.selectSnapshot(ClientState.getUser);
    this._store.dispatch(new Client.ExtendGymPass(
      {
        clientId: client.id,
        gymPassId: this.selectedGymPass?.id as string
      }
    )).subscribe(() => this._notificationService.notifyGymPassExtended());
  }
}
