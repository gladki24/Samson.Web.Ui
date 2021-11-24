import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { LoginState } from "../states/login.state";
import { WelcomeNavigatorService } from "../modules/welcome/services/navigator.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
    private readonly _store: Store,
    private readonly _welcomeNavigator: WelcomeNavigatorService
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this._store.selectSnapshot(LoginState.isLoggedIn);

    if (!isLoggedIn) {
      this._welcomeNavigator.login();
    }

    return isLoggedIn;
  }

}
