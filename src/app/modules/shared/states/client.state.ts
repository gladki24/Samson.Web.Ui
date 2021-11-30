import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ClientViewModel } from "../models/client/client-view.model";
import { ClientService } from "../services/api-service/client.service";
import { Client } from "../actions/client.actions";
import { ClientRequestFactory } from "../utils/client-request-factory";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { flatMap } from "rxjs/internal/operators";
import { Injectable } from "@angular/core";
import { Login } from "../actions/login.actions";


@State<ClientViewModel>({
  name: 'client'
})
@Injectable()
export class ClientState {

  public constructor(private readonly _apiService: ClientService) { }

  @Selector()
  public static getUser(state: ClientViewModel) {
    return state;
  }

  @Action(Client.Get)
  public getClient({getState, patchState}: StateContext<ClientViewModel>, { payload }: Client.Get) {
    return this._apiService.get(payload).pipe(
      tap(result => patchState({
        id: result.id,
        name: result.name,
        surname: result.surname,
        login: result.login,
        subscription: result.subscription
      }))
    )
  }

  @Action(Client.Register)
  public registerClient({getState, patchState, dispatch}: StateContext<ClientViewModel>, { payload }: Client.Register): Observable<string> {
    const request = ClientRequestFactory.GetRegisterClientRequest(
      payload.name, payload.surname, payload.login, payload.password);
    return this._apiService.register(request);
  }

  @Action(Client.Update)
  public updateClient({patchState, dispatch}: StateContext<ClientViewModel>, { payload }: Client.Update): Observable<void> {
    const request = ClientRequestFactory.GetUpdateClientRequest(payload.id, payload.name, payload.surname);

    return this._apiService.update(request).pipe(
      flatMap(() => dispatch(new Client.Get(payload.id)))
    );
  }

  @Action(Client.Delete)
  public deleteClient({patchState, dispatch}: StateContext<ClientViewModel>, { payload }: Client.Delete): Observable<void> {
    const request = ClientRequestFactory.GetDeleteClientRequest(payload.id, payload.password);

    return this._apiService.delete(request).pipe(
      flatMap(() => dispatch(Login.Logout))
    )
  }

  @Action(Client.ExtendGymPass)
  public extendGymPass(ctx: StateContext<ClientViewModel>, { payload }: Client.ExtendGymPass): Observable<void> {
    const request = ClientRequestFactory.GetExtendGymPassRequest(payload.clientId, payload.gymPassId);

    return this._apiService.extendPass(request).pipe(
      flatMap(() => ctx.dispatch(new Client.Get(ctx.getState().id))
    ));
  }
}
