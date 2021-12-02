import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { EventState } from "../../../../shared/states/event.state";
import { map } from "rxjs/operators";
import { EventViewModel } from "../../../../shared/models/event/event-view.model";

@Injectable({
  providedIn: 'root'
})
export class PreviewEventResolver implements Resolve<EventViewModel | undefined> {

  public constructor(
    private readonly _store: Store
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventViewModel | undefined> {
    const eventId = route.paramMap.get('event') as string;

    return this._store.select(EventState.event).pipe(
      map(fn => fn(eventId))
    )
  }
}
