import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GymObjectService } from "../services/api-service/gym-object.service";
import { GymRoomViewModel } from "../models/gym-room/gym-room-view.model";
import { GymRoom } from "../actions/gym-room.actions";
import { GymRoomRequestFactory } from "../utils/gym-room-request-factory";
import { flatMap, tap } from "rxjs/operators";

class GymRoomsViewModel {
  public gymRooms: GymRoomViewModel[] = [];
}


@Injectable({
  providedIn: 'root'
})
@State<GymRoomsViewModel>({
  name: 'gymRoom',
  defaults: {
    gymRooms: []
  }
})
export class GymRoomState {
  public constructor(
    private readonly _apiService: GymObjectService
  ) {
  }

  @Selector()
  public static gymRoom(state: GymRoomsViewModel) {
    return (id: string) => {
      return state.gymRooms.find(gymRoom => gymRoom.id === id)
    }
  }

  @Selector()
  public static gymRooms(state: GymRoomsViewModel) {
    return state.gymRooms;
  }

  @Action(GymRoom.GetAll)
  public getAll(ctx: StateContext<GymRoomsViewModel>) {
    return this._apiService.getAllRooms().pipe(
      tap(rooms => ctx.patchState({
        gymRooms: rooms
      }))
    )
  }

  @Action(GymRoom.AddRoom)
  public addRoom(ctx: StateContext<GymRoomsViewModel>, {payload}: GymRoom.AddRoom) {
    const request = GymRoomRequestFactory.getAddGymRoomRequest(payload.gymObjectId, payload.name, payload.dimensions);

    return this._apiService.addRoom(request).pipe(
      flatMap(() => ctx.dispatch(new GymRoom.GetAll()))
    );
  }

  @Action(GymRoom.RemoveRoom)
  public removeRoom(ctx: StateContext<GymRoomsViewModel>, {payload}: GymRoom.RemoveRoom) {
    const request = GymRoomRequestFactory.getRemoveGymRoomRequest(payload.gymObjectId, payload.gymRoomId);

    return this._apiService.removeRoom(request).pipe(
      flatMap(() => ctx.dispatch(new GymRoom.GetAll()))
    );
  }
}
