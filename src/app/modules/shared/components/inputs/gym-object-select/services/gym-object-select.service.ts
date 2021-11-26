import { Injectable } from '@angular/core';
import { GymObjectService } from "../../../../services/api-service/gym-object.service";
import { Observable } from "rxjs";
import { GymObjectViewModel } from "../../../../models/gym-object/gym-object-view.model";

@Injectable()
export class GymObjectSelectService {

  public constructor(
    private _gymObjectApiService: GymObjectService
  ) {
  }

  public loadGymObjects(): Observable<GymObjectViewModel[]> {
    return this._gymObjectApiService.getAll();
  }
}
