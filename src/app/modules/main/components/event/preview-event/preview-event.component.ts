import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventViewModel } from "../../../../shared/models/event/event-view.model";
import { Store } from "@ngxs/store";
import { LoginState } from "../../../../shared/states/login.state";
import { Event } from "../../../../shared/actions/event.action";
import { MainNotificationService } from "../../../services/notification.service";
import { MainNavigatorService } from "../../../services/navigator.service";

@Component({
  selector: 'app-preview-event',
  templateUrl: './preview-event.component.html'
})
export class PreviewEventComponent {

  public get event(): EventViewModel {
    return this._event;
  }

  public get isEnrolled(): boolean {
    if (!this._event || !this._userId)
      return false;

    return this._event.participantsId.includes(this._userId);
  }

  private _event: EventViewModel;
  private _userId?: string;

  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _notificationService: MainNotificationService,
    private readonly _store: Store,
    private readonly _navigator: MainNavigatorService
  ) {
    this._event = this._route.snapshot.data['event'];
    this._route.data.subscribe(data => {
      this._event = data['event'];
      this._userId = this._store.selectSnapshot(LoginState.tokenData).id;
    });
  }


  public enroll(): void {
    this._store.dispatch(new Event.Enroll({
      eventId: this._event.id,
      clientId: this._userId as string
    })).subscribe(() => {
      this._notificationService.notifyEventEnroll()
      this._navigator.eventList();
    })
  }

  public resign(): void {
    this._store.dispatch(new Event.Resign({
      eventId: this._event.id,
      clientId: this._userId as string
    })).subscribe(() => {
      this._notificationService.notifyEventResign()
      this._navigator.eventList();
    })
  }

  public cancel(): void {
    this._store.dispatch(new Event.Delete({
      id: this._event.id
    })).subscribe(() => {
      this._notificationService.notifyEventDeleted();
      this._navigator.eventList();
    })
  }
}
