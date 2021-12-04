import { Component, Input, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Event } from "../../../../shared/actions/event.action";
import { LoginState } from "../../../../shared/states/login.state";
import { map } from "rxjs/operators";
import { EventViewModel } from "../../../../shared/models/event/event-view.model";
import { EventState } from "../../../../shared/states/event.state";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

  @Input() public type: 'client' | 'trainer' | 'all' = 'all';

  public events: EventViewModel[] = [];

  public readonly columns = [
    'actions', 'name', 'startDate', 'endDate', 'count'
  ]

  public constructor(
    private readonly _store: Store
  ) {
  }

  public ngOnInit(): void {
    this._store.dispatch(new Event.GetAll());

    const userId = this._store.selectSnapshot(LoginState.tokenData).id;

    if (this.type === 'trainer') {
      this._store.select(EventState.trainerEvents).pipe(
        map(filterFn => filterFn(userId))
      ).subscribe(events => this.events = events)
    }

    else if (this.type === 'client') {
      this._store.select(EventState.clientEvents).pipe(
        map(filterFn => filterFn(userId))
      ).subscribe(events => this.events = events)
    }

    else if (this.type === 'all') {
      this._store.select(EventState.allEvents)
        .subscribe(events => this.events = events)
    }
  }
}
