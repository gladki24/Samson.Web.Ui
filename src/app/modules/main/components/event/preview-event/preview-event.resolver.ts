import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { EventState } from "../../../../shared/states/event.state";
import { first, flatMap, map } from "rxjs/operators";
import { EventViewModel } from "../../../../shared/models/event/event-view.model";
import { Event } from "../../../../shared/actions/event.action";

@Injectable({
  providedIn: 'root'
})
export class PreviewEventResolver implements Resolve<EventViewModel | undefined> {

  public constructor(
    private readonly _store: Store
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventViewModel | undefined> {
    const eventId = state.root.queryParamMap.get('event') as string;

    return this._store.dispatch(new Event.GetAll()).pipe(
      flatMap(() => this._store.select(EventState.event)),
      map(fn => fn(eventId)),
      first()
    )
  }
}
