import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Store } from "@ngxs/store";
import { LoginState } from "../modules/shared/states/login.state";
import { TokenViewModel } from "../modules/shared/models/token/token-view.model";
import { Role } from "../modules/shared/enums/role.enum";

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  public constructor(
    private readonly _store: Store,
    private readonly _jwtHelper: JwtHelperService
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this._store.selectSnapshot(LoginState.isLoggedIn);

    if (!isLoggedIn) {
      return false;
    }

    const token = this._store.selectSnapshot(LoginState.token) as string;

    if (this._jwtHelper.isTokenExpired(token)) {
      return false;
    }

    const tokenData: TokenViewModel =  this._jwtHelper.decodeToken();

    return tokenData.role.includes(Role.Client);
  }

}
