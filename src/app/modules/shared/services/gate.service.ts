import { Injectable } from '@angular/core';
import { ControllerCommunicationServiceBase } from "./controller-communication-service.base";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EntranceValidationInfoViewModel } from "../models/gate/entrance-validation-info-view.model";
import { GateEntryRequest } from "../models/gate/gate-entry.request";
import { GateExitRequest } from "../models/gate/gate-exit.request";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GateService extends ControllerCommunicationServiceBase {

  public constructor(
    private readonly _apiService: ApiService
  ) {
    super('gate')
  }

  public entry(request: GateEntryRequest): Observable<EntranceValidationInfoViewModel> {
    return this._apiService.post<GateEntryRequest, EntranceValidationInfoViewModel>(this.getUrl('entry'), request).pipe(
      map(info => new EntranceValidationInfoViewModel(info))
    )
  }

  public exit(request: GateExitRequest): Observable<EntranceValidationInfoViewModel> {
    return this._apiService.post<GateExitRequest, EntranceValidationInfoViewModel>(this.getUrl('exit'), request).pipe(
      map(info => new EntranceValidationInfoViewModel(info))
    )
  }

  public validEntrance(request: GateEntryRequest): Observable<EntranceValidationInfoViewModel> {
    return this._apiService.post<GateEntryRequest, EntranceValidationInfoViewModel>(this.getUrl('validEntrance'), request).pipe(
      map(info => new EntranceValidationInfoViewModel(info))
    )
  }
}
