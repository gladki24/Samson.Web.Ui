import { CreateEventRequest } from "../models/event/create-event.request";
import { UpdateEventRequest } from "../models/event/update-event.request";
import { DeleteEventRequest } from "../models/event/delete-event.request";
import { EnrollEventRequest } from "../models/event/enroll-event.request";
import { ResignEventRequest } from "../models/event/resign-event.request";

export namespace EventRequestFactory {
  export const getCreateEventRequest = (
    name: string,
    startDate: Date,
    endDate: Date,
    maxParticipants: number,
    supervisor: string,
    gymRoomId: string,
  ): CreateEventRequest =>
    new CreateEventRequest(name, startDate, endDate, maxParticipants, [], supervisor, gymRoomId)

  export const getUpdateEventRequest = (
    id: string,
    name: string,
    startDate: Date,
    endDate: Date,
    maxParticipants: number,
    eventSupervisorId: string,
    gymRoomId: string
  ): UpdateEventRequest =>
    new UpdateEventRequest(id, name, startDate, endDate, maxParticipants, eventSupervisorId, gymRoomId)

  export const getDeleteEventRequest = (
    id: string
  ): DeleteEventRequest =>
    new DeleteEventRequest(id)

  export const getEnrollEventRequest = (
    clientId: string,
    eventId: string
  ): EnrollEventRequest =>
    new EnrollEventRequest(clientId, eventId)

  export const getResignEventRequest = (
    clientId: string,
    eventId: string
  ): ResignEventRequest =>
    new ResignEventRequest(clientId, eventId)
}
