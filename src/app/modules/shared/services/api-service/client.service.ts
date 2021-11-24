import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { RegisterClientRequest } from "../../models/client/register-client.request";
import { Observable } from "rxjs";
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { UpdateClientRequest } from "../../models/client/update-client.request";
import { DeleteClientRequest } from "../../models/client/delete-client.request";
import { ExtendClientPassRequest } from "../../models/client/extend-client-pass.request";
import { ClientViewModel } from "../../models/client/client-view.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('client');
  }

  public get(clientId: string): Observable<ClientViewModel> {
    return this._apiService.get<ClientViewModel>(this.getUrl(clientId)).pipe(
      map(info => new ClientViewModel(info))
    )
  }

  public register(request: RegisterClientRequest): Observable<string> {
    return this._apiService.post<RegisterClientRequest, string>(this.getUrl('register'), request);
  }

  public update(request: UpdateClientRequest): Observable<void> {
    return this._apiService.post<UpdateClientRequest, void>(this.getUrl('update'), request);
  }

  public delete(request: DeleteClientRequest): Observable<void> {
    return this._apiService.delete<DeleteClientRequest, void>(this.getUrl('delete'), request);
  }

  public extendPass(request: ExtendClientPassRequest): Observable<void> {
    return this._apiService.post(this.getUrl('extendPass'), request);
  }
}
