import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "../api.service";
import { LoginRequest } from "../../models/token/login.request";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService extends ControllerCommunicationServiceBase {

  public constructor(
    private _apiService: ApiService
  ) {
    super('token');
  }

  public login(request: LoginRequest): Observable<string> {
    return this._apiService.post<LoginRequest, string>(this.getUrl('login'), request);
  }
}
