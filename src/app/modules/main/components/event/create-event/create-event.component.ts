import { Component } from '@angular/core';
import { CreateEventViewModel } from "../../../../shared/models/event/payloads/create-event-view.model";
import { Store } from "@ngxs/store";
import { MainNotificationService } from "../../../services/notification.service";
import { Event } from "../../../../shared/actions/event.action";
import { LoginState } from "../../../../shared/states/login.state";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

  public constructor(
    private readonly _store: Store,
    private readonly _notificationService: MainNotificationService
  ) { }

  public createEvent(viewModel: CreateEventViewModel): void {
    viewModel.eventSupervisorId = this._store.selectSnapshot(LoginState.tokenData).id;

    this._store.dispatch(new Event.Create(viewModel)).subscribe(() => {
      this._notificationService.notifyEventCreated()
    })
  }
}
