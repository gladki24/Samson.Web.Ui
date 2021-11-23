import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { GymObjectViewModel } from "../models/gym-object/gym-object-view.model";
import { map } from "rxjs/operators";
import { GymRoomViewModel } from "../models/gym-room/gym-room-view.model";
import { CreateGymObjectRequest } from "../models/gym-object/create-gym-object.request";
import { UpdateGymObjectRequest } from "../models/gym-object/update-gym-object.request";
import { DeleteGymObjectRequest } from "../models/gym-object/delete-gym-object.request";
import { AddGymRoomRequest } from "../models/gym-room/add-gym-room.request";
import { RemoveGymRoomRequest } from "../models/gym-room/remove-gym-room.request";

@Injectable({
  providedIn: 'root'
})
export class GymObjectService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('gymObject');
  }

  public get(gymObjectId: string): Observable<GymObjectViewModel> {
    return this._apiService.get<GymObjectViewModel>(this.getUrl(`getById/${gymObjectId}`)).pipe(
      map(info => new GymObjectViewModel(info))
    )
  }

  public getAll(): Observable<GymObjectViewModel[]> {
    return this._apiService.get<GymObjectViewModel[]>(this.getUrl('getAll')).pipe(
      map(infos => infos.map(info => new GymObjectViewModel(info)))
    )
  }

  public getRoomById(roomId: string): Observable<GymRoomViewModel> {
    return this._apiService.get<GymRoomViewModel>(this.getUrl(`getRoomById/${roomId}`)).pipe(
      map(info => new GymRoomViewModel(info))
    );
  }

  public getAllRooms(): Observable<GymRoomViewModel[]> {
    return this._apiService.get<GymRoomViewModel[]>(this.getUrl('getAllRooms')).pipe(
      map(infos => infos.map(info => new GymRoomViewModel(info)))
    )
  }

  public create(request: CreateGymObjectRequest): Observable<string> {
    return this._apiService.post<CreateGymObjectRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdateGymObjectRequest): Observable<void> {
    return this._apiService.post<UpdateGymObjectRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeleteGymObjectRequest): Observable<void> {
    return this._apiService.delete(this.getUrl('delete'), request);
  }

  public addRoom(request: AddGymRoomRequest): Observable<void> {
    return this._apiService.post<AddGymRoomRequest, void>(this.getUrl('addRoom'), request);
  }

  public removeRoom(request: RemoveGymRoomRequest): Observable<void> {
    return this._apiService.delete(this.getUrl('removeRoom'), request);
  }
}

