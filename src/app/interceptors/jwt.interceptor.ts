import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { LoginState } from "../modules/shared/states/login.state";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public constructor(
    private readonly _store: Store
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._store.selectSnapshot(LoginState.token);

    if (!token) {
      return  next.handle(request);
    }

    const jwtRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(jwtRequest);
  }
}
