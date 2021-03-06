import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TokenService } from "../services/api-service/token.service";
import { Login } from "../actions/login.actions";
import { Observable } from "rxjs";
import { LoginRequestFactory } from "../utils/login-request-factory";
import { tap } from "rxjs/operators";
import { TokenViewModel } from "../models/token/token-view.model";

class LoginViewModel {
  public token: string | null = null
}

@State<LoginViewModel>({
  name: 'login',
  defaults: {
    token: null
  }
})
@Injectable()
export class LoginState {
  public constructor(
    private readonly _tokenService: TokenService,
  ) {
  }

  @Selector()
  public static token(state: LoginViewModel): string | null {
    return state.token;
  }

  @Selector()
  public static isLoggedIn(state: LoginViewModel): boolean {
    return !!state.token;
  }

  @Selector()
  public static tokenData(state: LoginViewModel): TokenViewModel {
    const token = state.token as string;
    const data = atob(token.split('.')[1])
    return JSON.parse(data);
  }

  @Action(Login.Login)
  public login(ctx: StateContext<LoginViewModel>, {payload}: Login.Login): Observable<string> {
    const request = LoginRequestFactory.GetLoginRequest(payload.login, payload.password);
    return this._tokenService.login(request).pipe(
      tap(result => ctx.patchState({
          token: result
        })),
    )
  }

  @Action(Login.Logout)
  public logout(ctx: StateContext<LoginViewModel>) {
    ctx.setState({
      token: null
    });
  }
}
