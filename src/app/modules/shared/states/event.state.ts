import { EventViewModel } from "../models/event/event-view.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { EventService } from "../services/api-service/event.service";
import { Event } from "../actions/event.action";
import { CreateEventViewModel } from "../models/event/payloads/create-event-view.model";
import { UpdateEventViewModel } from "../models/event/payloads/update-event-view.model";
import { EnrollEventViewModel } from "../models/event/payloads/enroll-event-view.model";
import { DeleteEventViewModel } from "../models/event/payloads/delete-event-view.model";
import { ResignEventViewModel } from "../models/event/payloads/resign-event-view.model";
import { EventRequestFactory } from "../utils/event-request-factory";
import { flatMap } from "rxjs/operators";

class EventsViewModel {
  public events: EventViewModel[] = [];
}

@Injectable({
  providedIn: 'root'
})
@State<EventsViewModel>({
  name: 'event'
})
export class EventState {
  public constructor(
    private readonly _apiService: EventService
  ) {
  }

  @Selector()
  public static allEvents(state: EventsViewModel) {
    return state.events;
  }

  @Selector()
  public static clientEvents(state: EventsViewModel) {
    return (clientId: string) => {
      return state.events.filter(event => event.participantsId.includes(clientId))
    }
  }

  @Selector()
  public static trainerEvents(state: EventsViewModel) {
    return (trainerId: string) => {
      return state.events.filter(event => event.eventSupervisorId === trainerId)
    }
  }

  @Action(Event.GetAll)
  public getAll(ctx: StateContext<EventsViewModel>) {
    this._apiService.getAll().subscribe(events => {
      ctx.patchState({
        events
      })
    });
  }

  @Action(Event.Create)
  public create(ctx: StateContext<EventsViewModel>, payload: CreateEventViewModel) {
    const request = EventRequestFactory.getCreateEventRequest(payload.name, payload.startDate, payload.endDate,
      payload.maximumParticipants, payload.eventSupervisorId, payload.gymRoomId);

    return this._apiService.create(request).pipe(
      flatMap(() => ctx.dispatch(new Event.GetAll()))
    )
  }

  @Action(Event.Update)
  public update(ctx: StateContext<EventsViewModel>, payload: UpdateEventViewModel) {
    const request = EventRequestFactory.getUpdateEventRequest(payload.id, payload.name, payload.startDate, payload.endDate,
      payload.maximumParticipants, payload.eventSupervisorId, payload.gymRoomId);

    return this._apiService.update(request).pipe(
      flatMap(() => ctx.dispatch(new Event.GetAll()))
    )
  }

  @Action(Event.Enroll)
  public enroll(ctx: StateContext<EventsViewModel>, payload: EnrollEventViewModel) {
    const request = EventRequestFactory.getEnrollEventRequest(payload.clientId, payload.eventId);

    return this._apiService.enroll(request).pipe(
      flatMap(() => ctx.dispatch(new Event.GetAll()))
    )
  }

  @Action(Event.Delete)
  public delete(ctx: StateContext<EventsViewModel>, payload: DeleteEventViewModel) {
    const request = EventRequestFactory.getDeleteEventRequest(payload.id);

    return this._apiService.delete(request).pipe(
      flatMap(() => ctx.dispatch(new Event.GetAll()))
    )
  }

  @Action(Event.Resign)
  public resign(ctx: StateContext<EventsViewModel>, payload: ResignEventViewModel) {
    const request = EventRequestFactory.getResignEventRequest(payload.clientId ,payload.eventId);

    return this._apiService.resign(request).pipe(
      flatMap(() => ctx.dispatch(new Event.GetAll()))
    )
  }

}
