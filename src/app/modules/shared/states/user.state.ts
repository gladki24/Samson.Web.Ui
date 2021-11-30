import { Action, State, StateContext, Store } from "@ngxs/store";
import { UserViewModel } from "../models/user/user-view.model";
import { Injectable } from "@angular/core";
import { User } from "../actions/user.actions";
import { getRole } from "../utils/role.utils";
import { Role } from "../enums/role.enum";
import { Client } from "../actions/client.actions";
import { PersonalTrainer } from "../actions/personal-trainer.actions";
import { LoginState } from "./login.state";
import { TokenViewModel } from "../models/token/token-view.model";

@State<UserViewModel>({
  name: 'user'
})
@Injectable()
export class UserState {

  public constructor(
    private readonly _store: Store
  ) {
  }

  @Action(User.Get)
  public getUser({ dispatch }: StateContext<UserViewModel>) {
    const token = this._getToken();

    if (getRole(token) === Role.Client) {
      return dispatch(new Client.Get(token.id))
    }

    if (getRole(token) === Role.PersonalTrainer) {
      return dispatch(new PersonalTrainer.Get(token.id))
    }
    throw new Error('Nieprawidłowa rola użytkownika');
  }

  @Action(User.Update)
  public updateUser({ dispatch }: StateContext<UserViewModel>, { payload }: User.Update) {
    const token = this._getToken();

    if (getRole(token) === Role.Client) {
      return dispatch(new Client.Update(payload))
    }

    if (getRole(token) === Role.PersonalTrainer) {
      return dispatch(new PersonalTrainer.Update(payload))
    }

    throw new Error('Nieprawidłowa rola użytkownika');
  }

  @Action(User.Delete)
  public deleteUser({ dispatch }: StateContext<UserViewModel>, { payload }: User.Delete) {
    const token = this._getToken();

    if (getRole(token) === Role.Client) {
      return dispatch(new Client.Delete(payload))
    }

    if (getRole(token) === Role.PersonalTrainer) {
      return dispatch(new PersonalTrainer.Delete(payload))
    }

    throw new Error('Nieprawidłowa rola użytkownika');
  }

  private _getToken(): TokenViewModel {
    return this._store.selectSnapshot(LoginState.tokenData);
  }
}
