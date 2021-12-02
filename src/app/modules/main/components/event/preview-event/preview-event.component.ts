import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from "@angular/router";
import { EventViewModel } from "../../../../shared/models/event/event-view.model";
import { Store } from "@ngxs/store";
import { LoginState } from "../../../../shared/states/login.state";
import { Event } from "../../../../shared/actions/event.action";
import { MainNotificationService } from "../../../services/notification.service";

@Component({
  selector: 'app-preview-event',
  templateUrl: './preview-event.component.html'
})
export class PreviewEventComponent {

  public get event(): EventViewModel {
    return this._event;
  }

  private readonly _event: EventViewModel;
  private readonly _userId: string;

  public constructor(
    private readonly _routeSnapshot: ActivatedRouteSnapshot,
    private readonly _notificationService: MainNotificationService,
    private readonly _store: Store
  ) {
    this._event = this._routeSnapshot.data['event'];
    this._userId = this._store.selectSnapshot(LoginState.tokenData).id;
  }


  public enroll(): void {
    this._store.dispatch(new Event.Enroll({
      eventId: this._event.id,
      clientId: this._userId
    })).subscribe(() => this._notificationService.notifyEventEnroll())
  }

  public resign(): void {
    this._store.dispatch(new Event.Resign({
      eventId: this._event.id,
      clientId: this._userId
    })).subscribe(() => this._notificationService.notifyEventResign())
  }

  public cancel(): void {
    this._store.dispatch(new Event.Delete({
      id: this._event.id
    })).subscribe(() => this._notificationService.notifyEventDeleted())
  }

}
