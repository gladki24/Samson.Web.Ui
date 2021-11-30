import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { flatMap } from "rxjs/operators";
import { GymPassViewModel } from "../models/gym-pass/gym-pass-view.model";
import { GymPassService } from "../services/api-service/gym-pass.service";
import { GymPass } from "../actions/gym-pass.actions";
import { GymPassRequestFactory } from "../utils/gym-pass-request-factory";

class GymPassesViewModel {
  public gymPasses: GymPassViewModel[] = [];
}

@Injectable({
  providedIn: 'root'
})
@State<GymPassesViewModel>({
  name: 'gymPass',
  defaults: {
    gymPasses: []
  }
})
export class GymPassState {
  public constructor(
    private readonly _apiService: GymPassService
  ) {
  }

  @Selector()
  public static gymPass(state: GymPassesViewModel) {
    return (id: string) => {
      return state.gymPasses.find(gymPass => gymPass.id === id)
    }
  }

  @Selector()
  public static gymPasses(state: GymPassesViewModel) {
    return state.gymPasses;
  }

  @Action(GymPass.GetAll)
  public getAll(ctx: StateContext<GymPassesViewModel>) {
    this._apiService.getAll().subscribe(gymPasses => {
      ctx.patchState({
        gymPasses
      })
    });
  }

  @Action(GymPass.Create)
  public create(ctx: StateContext<GymPassesViewModel>, {payload}: GymPass.Create) {
    const request = GymPassRequestFactory.getCreateGymPassRequest(payload.name, payload.price, payload.duration);

    return this._apiService.create(request).pipe(
      flatMap(() => ctx.dispatch(new GymPass.GetAll()))
    )
  }

  @Action(GymPass.Update)
  public update(ctx: StateContext<GymPassesViewModel>, {payload}: GymPass.Update) {
    const request = GymPassRequestFactory.getUpdateGymPassRequest(payload.id, payload.name, payload.price,
      payload.duration);

    return this._apiService.update(request).pipe(
      flatMap(() => ctx.dispatch(new GymPass.GetAll()))
    )
  }

  @Action(GymPass.Delete)
  public delete(ctx: StateContext<GymPassesViewModel>, {payload}: GymPass.Delete) {
    const request = GymPassRequestFactory.getDeleteGymPassRequest(payload.id);

    return this._apiService.delete(request).pipe(
      flatMap(() => ctx.dispatch(new GymPass.GetAll()))
    )
  }
}
