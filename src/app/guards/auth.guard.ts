import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { LoginState } from "../modules/shared/states/login.state";
import { WelcomeNavigatorService } from "../modules/welcome/services/navigator.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Login } from "../modules/shared/actions/login.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
    private readonly _store: Store,
    private readonly _welcomeNavigator: WelcomeNavigatorService,
    private readonly _jwtHelper: JwtHelperService
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this._store.selectSnapshot(LoginState.isLoggedIn);
    const token = this._store.selectSnapshot(LoginState.token) as string;

    if (!isLoggedIn || this._jwtHelper.isTokenExpired(token)) {
      this._store.dispatch(new Login.Logout());
      this._welcomeNavigator.login();
    }

    return isLoggedIn;
  }

}
