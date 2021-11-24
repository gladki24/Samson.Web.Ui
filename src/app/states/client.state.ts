import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ClientViewModel } from "../modules/shared/models/client/client-view.model";
import { ClientService } from "../modules/shared/services/api-service/client.service";
import { Client } from "../actions/client.actions";
import { ClientRequestFactory } from "../modules/shared/utils/client-request-factory";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { flatMap } from "rxjs/internal/operators";
import { Injectable } from "@angular/core";


@State<ClientViewModel>({
  name: 'client'
})
@Injectable()
export class ClientState {

  public constructor(private readonly _apiService: ClientService) { }

  @Selector()
  public static getClient(state: ClientViewModel) {
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
  public registerClient({getState, patchState, dispatch}: StateContext<ClientViewModel>, { payload }: Client.Register): Observable<void> {
    const request = ClientRequestFactory.GetRegisterClientRequest(
      payload.name, payload.surname, payload.login, payload.password);


    return this._apiService.register(request).pipe(
      flatMap(id => dispatch(new Client.Get(id)))
    );
  }
}
