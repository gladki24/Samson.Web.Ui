import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { map } from "rxjs/operators";
import { EventViewModel } from "../models/event/event-view.model";
import { CreateEventRequest } from "../models/event/create-event.request";
import { UpdateEventRequest } from "../models/event/update-event.request";
import { DeleteEventRequest } from "../models/event/delete-event.request";
import { EnrollEventRequest } from "../models/event/enroll-event.request";
import { ResignEventRequest } from "../models/event/resign-event.request";

@Injectable({
  providedIn: 'root'
})
export class EventService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('event');
  }

  public get(eventId: string): Observable<EventViewModel> {
    return this._apiService.get<EventViewModel>(this.getUrl(`getById/${eventId}`)).pipe(
      map(info => new EventViewModel(info))
    )
  }

  public getAll(): Observable<EventViewModel[]> {
    return this._apiService.get<EventViewModel[]>(this.getUrl('getAll')).pipe(
      map(infos => infos.map(info => new EventViewModel(info)))
    )
  }

  public create(request: CreateEventRequest): Observable<string> {
    return this._apiService.post<CreateEventRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdateEventRequest): Observable<void> {
    return this._apiService.post<UpdateEventRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeleteEventRequest): Observable<void> {
    return this._apiService.delete(this.getUrl('delete'), request);
  }

  public enroll(request: EnrollEventRequest): Observable<void> {
    return this._apiService.post<EnrollEventRequest, void>(this.getUrl('enroll'), request);
  }

  public resign(request: ResignEventRequest): Observable<void> {
    return this._apiService.post<ResignEventRequest, void>(this.getUrl('resign'), request);
  }
}
