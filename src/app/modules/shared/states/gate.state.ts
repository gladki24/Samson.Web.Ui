import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { EntranceValidationInfoViewModel } from "../models/gate/entrance-validation-info-view.model";
import { GateService } from "../services/api-service/gate.service";
import { Observable } from "rxjs";
import { Gate } from "../actions/gate.actions";
import { GateRequestFactory } from "../utils/gate-request-factory";
import { tap } from "rxjs/operators";

class GateViewModel {
  public validation!: EntranceValidationInfoViewModel;
}

@State<GateViewModel>({
  name: 'gate'
})
@Injectable()
export class GateState {

  public constructor(
    private readonly _gateService: GateService
  ) {
  }

  @Selector()
  public static validationResult(state: GateViewModel): EntranceValidationInfoViewModel {
    return state.validation;
  }

  @Action(Gate.Valid)
  public valid(ctx: StateContext<GateViewModel>, action: Gate.Valid): Observable<EntranceValidationInfoViewModel> {
    const request = GateRequestFactory.GetGateValidEntranceRequest(action.gymObjectId, action.userId);
    return this._gateService.validEntrance(request).pipe(
      tap(result => {
        ctx.patchState({
          validation: result
        })
      })
    )
  }

  @Action(Gate.Exit)
  public exit(ctx: StateContext<GateViewModel>, action: Gate.Exit): Observable<void> {
    const request = GateRequestFactory.GetGateExitRequest(action.gymObjectId, action.userId);
    return this._gateService.exit(request);
  }

  @Action(Gate.Entry)
  public entry(ctx: StateContext<GateViewModel>, action: Gate.Entry): Observable<EntranceValidationInfoViewModel> {
    const request = GateRequestFactory.GetGateEntryRequest(action.gymObjectId, action.userId);
    return this._gateService.entry(request).pipe(
      tap(result => {
        ctx.patchState({
          validation: result
        })
      })
    )
  }

  @Action(Gate.Clear)
  public clear(ctx: StateContext<GateViewModel>): void {
    ctx.patchState({
      validation: undefined
    });
  }
}
