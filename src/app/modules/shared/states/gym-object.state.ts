import { GymObjectViewModel } from "../models/gym-object/gym-object-view.model";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GymObjectService } from "../services/api-service/gym-object.service";
import { GymObject } from "../actions/gym-object.actions";
import { GymObjectRequestFactory } from "../utils/gym-object-request-factory";
import { flatMap } from "rxjs/operators";

class GymObjectsViewModel {
  public gymObjects: GymObjectViewModel[] = [];
}

@Injectable({
  providedIn: 'root'
})
@State<GymObjectsViewModel>({
  name: 'gymObject',
  defaults: {
    gymObjects: []
  }
})
export class GymObjectState {
  public constructor(
    private readonly _apiService: GymObjectService
  ) {
  }

  @Selector()
  public static gymObject(state: GymObjectsViewModel) {
    return (id: string) => {
      return state.gymObjects.find(gymObject => gymObject.id === id)
    }
  }

  @Selector()
  public static gymObjects(state: GymObjectsViewModel) {
    return state.gymObjects;
  }

  @Action(GymObject.GetAll)
  public getAll(ctx: StateContext<GymObjectsViewModel>) {
    return this._apiService.getAll().subscribe(gymObjects => {
      ctx.patchState({
        gymObjects
      })
    })
  }

  @Action(GymObject.Create)
  public create(ctx: StateContext<GymObjectsViewModel>, {payload}: GymObject.Create) {
    const request = GymObjectRequestFactory.getCreateGymObjectRequest(
      payload.name, payload.covidConfiguration
    )

    return this._apiService.create(request).pipe(
      flatMap(() => ctx.dispatch(new GymObject.GetAll()))
    )
  }

  @Action(GymObject.Update)
  public update(ctx: StateContext<GymObjectsViewModel>, {payload}: GymObject.Update) {
    const request = GymObjectRequestFactory.getUpdateGymObjectRequest(
      payload.id, payload.name, payload.covidConfiguration
    )

    return this._apiService.update(request).pipe(
      flatMap(() => ctx.dispatch(new GymObject.GetAll()))
    )
  }

  @Action(GymObject.Delete)
  public delete(ctx: StateContext<GymObjectsViewModel>, {payload}: GymObject.Delete) {
    const request = GymObjectRequestFactory.getDeleteGymObjectRequest(payload.id);

    return this._apiService.delete(request).pipe(
      flatMap(() => ctx.dispatch(new GymObject.GetAll()))
    )
  }
}
