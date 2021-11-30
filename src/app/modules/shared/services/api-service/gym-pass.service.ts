import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "../api.service";
import { Observable } from "rxjs";
import { GymPassViewModel } from "../../models/gym-pass/gym-pass-view.model";
import { map } from "rxjs/operators";
import { CreateGymPassRequest } from "../../models/gym-pass/create-gym-pass.request";
import { UpdateGymPassRequest } from "../../models/gym-pass/update-gym-pass.request";
import { DeleteGymPassRequest } from "../../models/gym-pass/delete-gym-pass.request";

@Injectable({
  providedIn: 'root'
})
export class GymPassService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('gymPass')
  }

  public get(gymPassId: string): Observable<GymPassViewModel> {
    return this._apiService.get<GymPassViewModel>(this.getUrl(`getById/${gymPassId}`)).pipe(
      map(info => new GymPassViewModel(info))
    )
  }

  public getAll(): Observable<GymPassViewModel[]> {
    return this._apiService.get<GymPassViewModel[]>(this.getUrl('getAll')).pipe(
      map(infos => infos.map(info => new GymPassViewModel(info)))
    )
  }

  public create(request: CreateGymPassRequest): Observable<string> {
    return this._apiService.post<CreateGymPassRequest, string>(this.getUrl('create'), request);
  }

  public update(request: UpdateGymPassRequest): Observable<void> {
    return this._apiService.post<UpdateGymPassRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeleteGymPassRequest): Observable<void> {
    return this._apiService.delete(this.getUrl('delete'), request);
  }
}
